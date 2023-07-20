import React from 'react';
import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
    return ( 
        <div style={{textAlign: 'center'}}>
            <button onClick={() => navigate("/")}>Go to main page</button>
        </div> 
    );
}
 
export default Error;