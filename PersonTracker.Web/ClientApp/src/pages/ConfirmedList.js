import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ConfirmedList = () => {

    const [candidates, setCandidates] = useState([]);
    const [toggle, setToggle] = useState([true]);

   

    useEffect(() => {

        const getCandidates = async () => {
            const { data } = await axios.get('./api/person/getcandidates?status=confirmed')
            setCandidates(data)
        }

        getCandidates();

    }, [])

    return <div>
        <div className="container" style={{ marginTop: '20px' }}>
            <h1 className='text-center'>Confirmed List</h1>
            {toggle && <button className='btn btn-success float-right' onClick={() => setToggle(!toggle)}>Hide Notes</button>}
            {!toggle && <button className='btn btn-success float-right' onClick={() => setToggle(!toggle)}>View Notes</button>}
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {toggle && <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>

                    {candidates.map(c =>
                        <tr key={c.id}>
                            <td>{c.firstName}</td>
                            <td>{c.lastName}</td>
                            <td>{c.number}</td>
                            <td>{c.email}</td>
                            {toggle && < td > { c.notes } </td>}
                        </tr>)}
                </tbody>
            </table>
        </div>
    </div>
}

export default ConfirmedList;