import React from 'react';
import { Link } from 'react-router-dom';

const  Footer = () => {
    return (
        <footer>
            <p>2023 Ваше имя</p>
            <Link to="/">Главная</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/portfolio">Портфолио</Link>
            <Link to="/login">Логин</Link>
        </footer>
    );
}

export default Footer;