import React from 'react';
import { Link } from 'react-router-dom';

const  NavBar = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/contacts">Конакты</Link>
                </li><li>
                    <Link to="/portfolio">Портфолио</Link>
                </li><li>
                    <Link to="/Login">Логин</Link>
                </li>

            </ul>
        </div>
    );
}

export default NavBar;