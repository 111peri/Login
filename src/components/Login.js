import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    useEffect(() => {
        const time = setTimeout(() => {
            history.push('/');
        }, 3000);

        return () => {
            clearTimeout(time);
        };
    }, [history]);

    return (
        <div>
            <h1>Страница Логин</h1>
        </div>
    );
};

export default Login;






