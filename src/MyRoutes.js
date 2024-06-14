import React from 'react';
import { Route , Routes} from 'react-router-dom';
import TurnOn from './pages/TurnOn/TurnOn';
import Home from './pages/Home/Home';


export default () => {
    return (
            <Routes>
                <Route exact path='/eneas-os' element={<TurnOn/>}/>
                <Route exact path='/eneas-os/home' element={<Home/>}/>
            </Routes>
    );
}
