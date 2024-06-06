import React, {useEffect, useState} from 'react';
import '../../styles/ScheduleTable/ScheduleTable.css';
import axios from "axios";
import moment from 'moment';
import UniversalModalForm from "../SchedulePanel/Modal/UniversalModalForm";
import Modal from "../SchedulePanel/Modal/Modal";

const ScheduleTable = () => {

    const authToken = localStorage.getItem("authToken");
    const [recordOptions, setRecordOptions] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRecordId, setSelectedRecordId] = useState(null);
    const fetchRecordOptions = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/schedule', {
                headers: { Authorization: `Token ${authToken}` }
            });

            const recordOptions = response.data.map(record => {
                const guestProfile = record.guest.profile;
                const procedure = record.procedure;
                return {
                    id: record.id,
                    date: record.date,
                    startTime: record.timeStart,
                    finishTime: record.timeFinish,
                    is_complete: record.is_complete,
                    name: (procedure ? procedure.shortname : '') + " " + (guestProfile ? guestProfile.shortname : ''),
                };

            });


            setRecordOptions(recordOptions);
        } catch (error) {
            console.error('Error fetching records:', error);
        }
    };

    useEffect(() => {


        fetchRecordOptions();
    }, [authToken]);

    const handleRecordClick = (recordId) => {
        setSelectedRecordId(recordId);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRecordId(null);
    };

    const handleSuccess = () => {

        fetchRecordOptions();
        // Optionally, refresh the data
    };

    const allProcedures = recordOptions.flatMap(procedure => ({
        ...procedure,
        dateTime: new Date(`${procedure.date} ${procedure.startTime}`)
    }));

    const sortedProcedures = allProcedures.sort((a, b) => a.dateTime - b.dateTime);

    const proceduresByDate = sortedProcedures.reduce((acc, procedure) => {
        if (!acc[procedure.date]) {
            acc[procedure.date] = [];
        }
        acc[procedure.date].push(procedure);
        return acc;
    }, {});

    const dates = Object.keys(proceduresByDate);

    const hours = Array.from({ length: 10 }, (_, i) => `${i + 9}:00`);

    return (
        <div id="scheduleTable" className="schedule-table-container">
            <table className="schedule-table">
                <thead>
                <tr>
                    <th>Дата</th>
                    {hours.map((hour, index) => (
                        <th key={index}>{hour}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {dates.map((date, dateIndex) => (
                    <tr key={dateIndex}>
                        <td>{date}</td>
                        {hours.map((hour, hourIndex) => {
                            const procedures = proceduresByDate[date];
                            const hourMoment = moment(hour, 'HH:mm:ss');
                            const procedureInHour = procedures && procedures.some(procedure => {
                                const startTimeMoment = moment(procedure.startTime, 'HH:mm:ss');
                                const finishTimeMoment = moment(procedure.finishTime, 'HH:mm:ss');
                                return hourMoment.isBetween(startTimeMoment, finishTimeMoment, null, '[]');
                            });
                            return (
                                <td key={hourIndex} className={procedureInHour ? 'busy' : ''}>
                                    {procedureInHour && procedures.map(procedure => {
                                        const startTimeMoment = moment(procedure.startTime, 'HH:mm:ss');
                                        const finishTimeMoment = moment(procedure.finishTime, 'HH:mm:ss');
                                        if (hourMoment.isBetween(startTimeMoment, finishTimeMoment, null, '[]')) {
                                            return (
                                                <div
                                                    key={procedure.id}
                                                    onClick={() => handleRecordClick(procedure.id)}
                                                    className={procedure.is_complete ? 'completed' : 'not-completed'}
                                                >
                                                    {procedure.name}
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </td>
                            );
                        })}
                    </tr>
                ))}
                </tbody>
            </table>
            {selectedRecordId && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    recordId={selectedRecordId}
                    authToken={authToken}
                    onSuccess={handleSuccess}
                />
            )}
        </div>
    );
};

export default ScheduleTable;
