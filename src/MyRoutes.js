import React from 'react';
import { Route , Routes} from 'react-router-dom';
import TurnOn from './pages/TurnOn/TurnOn';


export default () => {
    return (
            <Routes>
                <Route exact path='/eneas-os' element={<TurnOn/>}/>
            </Routes>
    );
}
