import React, { useEffect, useState } from 'react';
import { use } from "react-router-dom";

const HomePage = () => {
    const [counter, setCounter] = useState(0);
    const history = useHistory();

    useEffect(() => {
        if (counter === 10) {
            history.push('/login');
        }
    }, [counter, history]);

    return (
        <div>
            <h1>Главная страница</h1>
            <p>Счетчик: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Увеличить счетчик</button>
        </div>
    );
}

export default HomePage;
