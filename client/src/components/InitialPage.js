import React, { Component, Fragment } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModal from '../components/auth/RegisterModal';
import LoginModal from '../components/auth/LoginModal';



class InitialPage extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const guestLinks = (
            <Fragment>
                <h1>Welcome To Code Buddy</h1>
                <p>Please Sign In or Register To Continue</p>
                <br />
                <br />
                <LoginModal buttonLabel='Login' style={{ marginTop: 100 }} />
                <RegisterModal buttonLabel='New User?' style={{ marginTop: 100 }} />
            </Fragment>
        )

        const authLinks = (
            <Fragment>
                <h1>{ user ? `Welcome ${user.firstName}` : `` }</h1>
                <br />
                <h3>Please use the toggle in upper left corner of the page to navigate</h3>
            </Fragment>

        )

        return (
            <div className='App'>
                {/* <h1>Welcome To Code Buddy</h1> */}
                { isAuthenticated ? authLinks : guestLinks }
                {/* <p>Please Sign In or Register To Continue</p> */}
                {/* <LoginModal buttonLabel='Login' style={{ marginTop: 100 }} />
                <RegisterModal buttonLabel='New User?' style={{ marginTop: 100 }} /> */}
                {/* <Authentication buttonLabel='New User?' style={{ marginTop: 100 }} /> */}
            </div>
        );
    }
        
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(InitialPage);