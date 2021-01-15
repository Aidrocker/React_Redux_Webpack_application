import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Main from './main/Main';
import Card from './card/card';
import Error from './main/repo/Error';
import './app.less';

const App = () => {
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/card/:username/:reponame' component={Card} />
                    <Route path='/error' component={Error} />
                    <Redirect to='/'/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;