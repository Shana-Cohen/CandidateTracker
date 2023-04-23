import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'

const CandidatesContext = createContext();

const CandidatesContextComponent = ({ children }) => {
    const [counts, setCounts] = useState([]);
    const updateCounts = async () => {
        const { data } = await axios.get('/api/person/getcounts');
        setCounts(data);

    }

    useEffect(() => {
        updateCounts();
    }, [])

    const obj = {counts, updateCounts};

return (
    <CandidatesContext.Provider value = {obj}>
        {children}
    </CandidatesContext.Provider>
)
}

const useCandidatesCount = () =>{
    return useContext(CandidatesContext);
}

export {CandidatesContextComponent, useCandidatesCount}