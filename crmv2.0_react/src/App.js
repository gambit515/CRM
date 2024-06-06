import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import MainWorkerSheet from "./components/MainWorkerSheet/MainWorkerSheet";
import AuthForm from "./components/AuthForm/AuthForm";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import { useEffect } from 'react';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <MainContent />
        </BrowserRouter>
    );
};

function Header() {
    return (
        <header>

        </header>
    );
}

function MainContent() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/main/info" replace />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/main/*" element={<MainWorkerSheet/>}/>
            <Route path="/logout" element={<Logout/>}/>
        </Routes>
    );
}

export default App;
