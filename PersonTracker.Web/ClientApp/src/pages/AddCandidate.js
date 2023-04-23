import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useCandidatesCount } from '../CandidatesContext';


const AddCandidate = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        notes: '',
        registrationStatus: 'Pending'
    });

    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/person/addcandidate', formData);
        updateCounts();
        history.push('/pendinglist');

    }

    const { updateCounts } = useCandidatesCount();

    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 card card-body bg-light">
                <h3>Add a new person</h3>
                <form onSubmit={onFormSubmit}>
                    <input onChange={onTextChange} value={formData.firstName} type="text" name="firstName" placeholder="First Name" className="form-control" />
                    <br />
                    <input onChange={onTextChange} value={formData.lastName} type="text" name="lastName" placeholder="Last Name" className="form-control" />
                    <br />
                    <input onChange={onTextChange} value={formData.email} type="text" name="email" placeholder="Email" className="form-control" />
                    <br />
                    <input onChange={onTextChange} value={formData.number} type="text" name="number" placeholder="Phone Number" className="form-control" />
                    <br />
                    <textarea onChange={onTextChange} value={formData.notes} name="notes" rows="4" placeholder="My notes on this one...." className="form-control" />
                    <br />
                    <button className="btn btn-primary">Add Person</button>
                </form>
            </div>
        </div>
    )
}
export default AddCandidate;