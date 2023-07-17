import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.less'
import { setCount } from '../reducers/reposReducer';
const App = () => {
    const dispatch = useDispatch()
    const count = useSelector(state => state.repos.count)
    const onCountClick = () => {
        dispatch(setCount(5))
    }
    return (
        <div className="app">
            <button onClick={()=>onCountClick()}>Count</button>
            <div>{count}</div>
        </div> 
        );
}
 
export default App;