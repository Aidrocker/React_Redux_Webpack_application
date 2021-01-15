import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Main from './main/Main';
import './app.less';
import Card from './card/card';

const App = () => {
    const dispatch = useDispatch();

    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/card' component={Card} />
                    <Redirect to='/'/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;