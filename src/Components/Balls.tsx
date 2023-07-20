import React from 'react';
import "./Balls.css";

const Balls = ({children}) => {

    return (
        <div className="balls-container">
            <div className="ball">
                {children}
            </div>
        </div>
    );
};

export default Balls;
