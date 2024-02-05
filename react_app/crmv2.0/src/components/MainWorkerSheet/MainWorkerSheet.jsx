import React from 'react';
/*import '../../styles/WorkerList.css'*/
import Header from "./Header";
import HotBar from "./HotBar";
import '../../styles/MainWorkerSheet/Main.css'
import InfoPanel from "./InfoPanel";
import MainPanel from "./MainPanel";

const MainWorkerSheet = () => {
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