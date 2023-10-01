import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Portfolio from "./components/Portfolio";
import HomePage from "./components/HomePage";
import Contacts from "./components/Contacts"; // Добавлен импорт компонента Contacts
import Login from "./components/Login"; // Добавлен импорт компонента Login

const App = () => {
    return (
        <BrowserRouter>
            <MainLayout />
            <Routes>
                <Route path="/contacts" component={Contacts} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/login" component={Login} />
                <Route path="/" component={HomePage} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
