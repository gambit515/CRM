import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Modal.css';

const Modal = ({ isOpen, onClose, recordId, authToken, onSuccess }) => {
    const [formData, setFormData] = useState({
        date: '',
        timeStart: '',
        timeFinish: '',
        filial: '',
        guest: '',
        master: '',
        procedure: '',
        is_complete: false
    });

    const [filials, setFilials] = useState([]);
    const [guests, setGuests] = useState([]);
    const [masters, setMasters] = useState([]);
    const [procedures, setProcedures] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [filialRes, guestRes, masterRes, procedureRes] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/api/filial', { headers: { Authorization: `Token ${authToken}` } }),
                    axios.get('http://127.0.0.1:8000/api/user', { headers: { Authorization: `Token ${authToken}` } }),
                    axios.get('http://127.0.0.1:8000/api/user', { headers: { Authorization: `Token ${authToken}` } }),
                    axios.get('http://127.0.0.1:8000/api/procedure', { headers: { Authorization: `Token ${authToken}` } })
                ]);

                setFilials(filialRes.data);
                setGuests(guestRes.data);
                setMasters(masterRes.data);
                setProcedures(procedureRes.data);

                const response = await axios.get(`http://127.0.0.1:8000/api/schedule/${recordId}`, {
                    headers: { Authorization: `Token ${authToken}` }
                });

                const { date, timeStart, timeFinish, filial, guest, master, procedure, is_complete } = response.data;
                setFormData({ date, timeStart, timeFinish, filial, guest, master, procedure, is_complete });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (recordId) {
            fetchData();
        }
    }, [recordId, authToken]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:8000/api/schedule/${recordId}`, formData, {
                headers: { Authorization: `Token ${authToken}` }
            });
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error updating record:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api/schedule/delete/${recordId}`, {
                headers: { Authorization: `Token ${authToken}` }
            });
            onSuccess();
            onClose();
        } catch (error) {
            console.error('Error deleting record:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>Закрыть</button>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Дата:</label>
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Время начала:</label>
                        <input
                            type="time"
                            name="timeStart"
                            value={formData.timeStart}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Время окончания:</label>
                        <input
                            type="time"
                            name="timeFinish"
                            value={formData.timeFinish}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Филиал:</label>
                        <select name="filial" value={formData.filial} onChange={handleChange} required>
                            <option value="">Выберите филиал</option>
                            {filials.map(filial => (
                                <option key={filial.id} value={filial.id}>{filial.name}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Гость:</label>
                        <select name="guest" value={formData.guest} onChange={handleChange} required>
                            <option value="">Выберите гостя</option>
                            {guests.map(guest => (
                                <option key={guest.id} value={guest.id}>{guest.username}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Мастер:</label>
                        <select name="master" value={formData.master} onChange={handleChange} required>
                            <option value="">Выберите мастера</option>
                            {masters.map(master => (
                                <option key={master.id} value={master.id}>{master.username}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Процедура:</label>
                        <select name="procedure" value={formData.procedure} onChange={handleChange} required>
                            <option value="">Выберите процедуру</option>
                            {procedures.map(procedure => (
                                <option key={procedure.id} value={procedure.id}>{procedure.shortname}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Выполнено:</label>
                        <label className="switch">
                            <input
                                type="checkbox"
                                name="is_complete"
                                checked={formData.is_complete}
                                onChange={handleChange}
                            />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <button type="submit" className="btn-edit" style={{ backgroundColor: '#FFA500', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Изменить</button>
                    <button type="button" onClick={handleDelete} className="btn-delete">Удалить</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
