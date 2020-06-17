import React from 'react';
import logo from '../assets/images/spinner.gif';

const LoadingPage = () => {
    return (
        <div>
            <h1>okay! let me see what i can find...</h1>
            <img src={logo} alt='loading...' />
        </div>
    );
};
export default LoadingPage;