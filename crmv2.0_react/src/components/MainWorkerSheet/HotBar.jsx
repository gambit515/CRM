import React from 'react';
import '../../styles/MainWorkerSheet/Hotbar.css'
import {Link} from "react-router-dom";

const HotBar = () => {
    return (
        <div>
            <div className="HotBar">

                <Link to="/main/info">
                    <div className="HomeButton">
                        <img src={require("../../images/MainWorkerSheet/home.png")} alt="Home IMG"/>
                    </div>
                </Link>
                <Link to="/main/schedule">
                    <img src={require("../../images/MainWorkerSheet/calendar.png")} alt="calendar IMG"/>
                </Link>
                <div className="TasksButton">
                    <img src={require("../../images/MainWorkerSheet/tasks.png")} alt="tasks IMG"/>
                </div>
                <img src={require("../../images/MainWorkerSheet/curency.png")} alt="currency IMG"/>
                <Link to="/login">
                    <img src={require("../../images/MainWorkerSheet/login.png")} alt="login IMG"/>
                </Link>
                <Link to="/logout">
                    <img src={require("../../images/MainWorkerSheet/logout.png")} alt="login IMG"/>
                </Link>
            </div>
        </div>
    );
};

export default HotBar;