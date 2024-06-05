import React from 'react';
import { Route , Routes} from 'react-router-dom';
import TurnOn from './pages/TurnOn/TurnOn';
import Home from './pages/Home/Home';


export default () => {
    return (
            <Routes>
                <Route exact path='/' element={<TurnOn/>}/>
                <Route exact path='/home' element={<Home/>}/>
            </Routes>
    );
}
