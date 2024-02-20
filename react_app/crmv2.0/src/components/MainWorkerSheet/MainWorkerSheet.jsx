import React, {useEffect} from 'react';
/*import '../../styles/WorkerList.css'*/
import Header from "./Header";
import HotBar from "./HotBar";
import '../../styles/MainWorkerSheet/Main.css'
import InfoPanel from "./InfoPanel";
import MainPanel from "./MainPanel";
import {useNavigate} from "react-router-dom";

const MainWorkerSheet = () => {
    const navigate = useNavigate()
    useEffect(() =>{
        if(localStorage.getItem("authToken")==null){
            navigate("/login")
        }
    },[navigate])
    return (
        <div>
            <Header/>
            <div className="Main">
                <HotBar/>
                <InfoPanel/>
                <MainPanel/>
            </div>
        </div>
    );
};

export default MainWorkerSheet;