﻿import React from 'react';
import { Link } from 'react-router-dom';
import { useCandidatesCount } from '../CandidatesContext';

const Layout = ({ children }) => {

    const { counts } = useCandidatesCount();

    return <>
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                <div className="container">
                    <a className="navbar-brand">Shana's Person Tracker</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <Link to='/' className='nav-link text-light'>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/addcandidate' className='nav-link text-light'>
                                    Add Person
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pendinglist' className='nav-link text-light'>
                                    View Pending List ({counts.pending})
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/confirmedlist' className='nav-link text-light'>
                                    View Confirmed List ({counts.confirmed})

                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/refusedlist' className='nav-link text-light'>
                                    View Refused List ({counts.refused})

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div className="container" style={{ marginTop: 80 }}>
            <main role="main" className="pb-3">
                {children}
            </main>
        </div>
    </>
}
export default Layout;