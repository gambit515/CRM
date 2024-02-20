import React from 'react';
import '../../styles/MainWorkerSheet/InfoPanel.css'

const InfoPanel = () => {

    return (
        <div className="InfoPanel">
            <div className="AvatarWithFIO">
                <img
                    src="https://sun9-21.userapi.com/impg/1BMszh6PzNOw7GtM_7yl0bSEJPL2UNwVoTbZlw/3AR5cn0ibkw.jpg?size=607x1080&quality=95&sign=65592e9802237213c6bb3bbf61220e4a&type=album"/>
                <div className="FIO">
                    <label>Амоскин</label>
                    <label>Александр</label>
                    <label>Федорович{/*localStorage.getItem("authToken")*/}</label>
                </div>
            </div>
            <div className="MainInfoContainer">
                <h1>Основная информация</h1>
                <div className="MainInfoContainerFilling">
                    <h2>Статус:</h2>
                    <label>Работает</label>
                    <h2>Возраст:</h2>
                    <label>19 лет (28.08.2004)</label>
                    <h2>Роль:</h2>
                    <label>Мастер-маникюр</label>
                    <h2>Филиал:</h2>
                    <label>КРСК01-Взлетка</label>
                </div>
            </div>
            <div className="MainInfoContainer">
                <h1>Контакты</h1>
                <div className="MainInfoContainerFilling">
                    <h2>Моб. телефон:</h2>
                    <label>89832970536</label>
                    <h2>Email:</h2>
                    <label>amoskin3515@gmail.com</label>
                    <h2>VK:</h2>
                    <label>https://vk.com/gambit515</label>
                </div>
            </div>
        </div>
    );
};

export default InfoPanel;