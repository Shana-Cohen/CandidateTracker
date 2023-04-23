import React, { Component } from 'react';
import { Route } from 'react-router';
import { CandidatesContextComponent } from './CandidatesContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddCandidate from './pages/AddCandidate';
import PendingList from './pages/PendingList';
import RefusedList from './pages/RefusedList';
import ConfirmedList from './pages/ConfirmedList';
import Details from './pages/Details';


export default class App extends Component {
    render() {
        return (
             <CandidatesContextComponent>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/AddCandidate' component={AddCandidate} />
                    <Route exact path='/PendingList' component={PendingList} />
                    <Route exact path='/RefusedList' component={RefusedList} />
                    <Route exact path='/ConfirmedList' component={ConfirmedList} />
                    <Route exact path='/Details/:id' component={Details} />
                </Layout>
             </CandidatesContextComponent>
        )
    }
}
