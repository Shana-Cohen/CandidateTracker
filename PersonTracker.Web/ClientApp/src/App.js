import React, { Component } from 'react';
import { Route } from 'react-router';
import { CountsContextComponent } from './CountsContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import AddCandidate from './pages/AddCandidate';
import PendingList from './pages/PendingList';


export default class App extends Component {
    render() {
        return (
            <CountsContextComponent>
                <Layout>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/AddCandidate' component={AddCandidate} />
                    <Route exact path='/PendingList' component={PendingList} />
                </Layout>
            </CountsContextComponent>
        )
    }
}
