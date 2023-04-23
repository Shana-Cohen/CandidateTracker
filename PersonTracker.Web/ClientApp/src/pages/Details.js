import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useCandidatesCount } from '../CandidatesContext';

const Details = () => {

    const { id } = useParams();
    const [candidate, setCandidate] = useState('');
    const history = useHistory();

    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/person/getcandidate?id=${id}`);
            setCandidate(data);
        }
        getCandidate();
    }, [])

    const { updateCounts } = useCandidatesCount();

    const onRejectClick = async () => {
        await axios.post('/api/person/rejectcandidate', candidate)
        updateCounts();
        history.push('/refusedlist')
    }

    const onAcceptClick = async () => {
        await axios.post('/api/person/acceptcandidate', candidate)
        updateCounts();
        history.push('/confirmedlist')
    }

    const onEditClick = async () => {
        await axios.post('/api/person/editcandidate', candidate)
        updateCounts();
        history.push('/pendinglist')
    }

    return (
        <div className="container">
            <h1 className='text-center'>Details for {candidate.firstName} {candidate.lastName}</h1>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card card-body bg-light'>
                        <h4>First Name: {candidate.firstName}</h4>
                        <h4>Last Name: {candidate.lastName}</h4>
                        <h4>Phone Number: {candidate.number}</h4>
                        <h4>Email: {candidate.email}</h4>
                        <h4>Notes:</h4>
                        <input type='text' value={candidate.notes} name="notes"/>

                        <div className='row'>
                            <div className='offset-md-4'>
                                <div className='btn btn-danger' onClick={onRejectClick} >Reject</div>
                                <span>&nbsp;</span>
                                <div className='btn btn-success' onClick={onAcceptClick}>Accept</div>
                                <span>&nbsp;</span>
                                <div className='btn btn-primary' onClick={onEditClick}>Save Changes</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Details;