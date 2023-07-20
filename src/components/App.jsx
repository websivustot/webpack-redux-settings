import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.less'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import Card from './card/card';
const App = () => {
    const dispatch = useDispatch()
    return (
        <BrowserRouter>
            <div className='container'>
                <Routes> 
                    <Route path="/" element={<Main/>}/>
                    <Route path="/card/:username/:reponame/" element={<Card/>}/>
                    <Route path="*" element={<Main />} /> 
                </Routes>
            </div>
        </BrowserRouter>
        ); 
}
 
export default App;