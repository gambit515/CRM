import React, {useState} from 'react';
import FiltersPanel from "../components/FiltersPanel/FiltersPanel";
import ScheduleTable from "../components/ScheduleTable/ScheduleTable";
import "../styles/Schedule/Schedule.css";

const Schedule = () => {

    const [scheduleTableKey, setScheduleTableKey] = useState(Date.now()); // состояние для ключа MainPanel
    const scheduleTableComponentRef = React.useRef(null);

    const updateScheduleTable = () => {
        setScheduleTableKey(Date.now()); // обновить ключ для MainPanel
    };

    const downloadScheduleTable = () => {

        if (scheduleTableComponentRef.current) {
            scheduleTableComponentRef.current.exportTableToExcel();
        }
    };


    return (
        <div className={"Column"}>
            <FiltersPanel updateTable={updateScheduleTable} downloadScheduleTable={downloadScheduleTable}/>
            <ScheduleTable key={scheduleTableKey} ref={scheduleTableComponentRef} />
        </div>

    );
};

export default Schedule;