import React from 'react';

const Home = () => {

    return (
        <div className='container'>
            <div className='jumbotron' style={{ textAlign: 'center'}}>
                <h1>Welcome to Candidate Tracker</h1>
                <p>Use the tabs above to navigate. Candidates can be added on the 'Add Person' tab, and then either accepted or rejected. Click the links below to view the list of current pending, accepted, or rejected candidates. </p>
            </div>
        </div>
    )
}

export default Home;