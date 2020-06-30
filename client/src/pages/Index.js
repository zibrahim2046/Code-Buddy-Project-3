import React, { useState, useEffect } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import styled from 'styled-components';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import RegisterModal from '../components/auth/RegisterModal';
// import LoginModal from '../components/auth/LoginModal';
import InitialPage from '../components/InitialPage'


// const MainPage = () => {
//     return (
//         <div className='App'>
//             <h1>Welcome To Code Buddy</h1>
//             <p>Please Sign In or Register To Continue</p>
//             <LoginModal buttonLabel='Login' style={{ marginTop: 100 }} />
//             <RegisterModal buttonLabel='New User?' style={{ marginTop: 100 }} />
//             {/* <Authentication buttonLabel='New User?' style={{ marginTop: 100 }} /> */}
//         </div>
//     );
// };

const MainPage = () => {
    return (
        <InitialPage />
    )
}

export default MainPage;


