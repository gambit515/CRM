import React, {useEffect, useState} from 'react';
import '../../styles/MainWorkerSheet/Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    const authToken = localStorage.getItem("authToken");
    let [userInfo,setUserInfo] = useState();
    const fetchData = async (url, method = 'GET', headers = {}) => {

        try {
            const response = await fetch(url, {
                method: method,
                headers: headers
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Для передачи ошибки наружу для обработки в вызывающем коде
        }
    };
    async function getDataFromUser(){
        try {
            const headers = { 'Authorization': `Token ${authToken}` };
            const data = await fetchData('http://127.0.0.1:8000/api/info/me', 'GET', headers);

            setUserInfo(data);
            console.log("hihi");
            console.log(data);
        }
        catch (error) {
            console.error('Error fetching schedule count:', error);
        }
    }
    useEffect(()=>{
        getDataFromUser()
    },[])
    return (
        <div>
            <div className="Header">

                <img className="G" src={require("../../images/MainWorkerSheet/G.png")} alt="G logo"/>
                <div className="TopImages">
                    <img src={require("../../images/MainWorkerSheet/menu.png")} alt="Menu IMG"/>
                    <img src={require("../../images/MainWorkerSheet/searchIMG.png")} alt="Search IMG"/>
                </div>
                <label>Поиск пользователей</label>

                <div className="Profile">
                    {userInfo && userInfo.is_staff && (
                        <a className={"LinkToAdminPanel"} href={"http://localhost:8000/admin"}>Панель администратора</a>
                    )}
                    <img

                        src={userInfo ? "http://127.0.0.1:8000/" + userInfo.photo : "default_image_url"} alt="User Photo" />
                    <label>Амоскин Александр</label>
                </div>
            </div>
        </div>
    );
};

export default Header;