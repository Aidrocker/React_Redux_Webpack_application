import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.less';
import {setCount} from '../reducers/repos-reducer'

const App = () => {
    const dispatch = useDispatch() //получение функции store.dispatch в компоненте. 
    const count = useSelector(state => state.repos.count); //получаем данные из состояния

    function onCountCLick() {
        dispatch(setCount(5))
    }
    return (
        <div className='app'>
            <button onClick={() => onCountCLick()}>Click</button>
            <div>
                {count}
            </div>
        </div>
    )
}

export default App;