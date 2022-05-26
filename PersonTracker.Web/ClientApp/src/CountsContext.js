import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CountsContext = createContext();

const CountsContextComponent = ({ children }) => {
    const [counts, setCounts] = useState({
        pending: 0,
        confirmed: 0,
        refused: 0
    });


    const updateCounts = async () => {
        const { data } = await axios.get('api/person/getcounts');
        setCounts(data);
    }

    useEffect(() => {
        updateCounts();
    }, []);

    return (
        <CountsContext.Provider value={{ counts, updateCounts }}>
            {children}
        </CountsContext.Provider>
    )
}
const useCounts = () => {
    return useContext(CountsContext);
}

export { CountsContextComponent, useCounts };
