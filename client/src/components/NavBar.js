import React, { Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logout from './auth/Logout';

const NavContainer = styled.div`
    width: 100%;
    position: absolute;
    right: 0;
`;


class NavBar extends Component {
    state = {
        isOpen: false,
    };

    static propTypes = {
        auth: PropTypes.object.isRequired,
        // isAuthenticated: PropTypes.bool
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <NavLink href='/help'>Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href='/saved'>Saved Content</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href='https://github.com/zibrahim2046/Code-Buddy-Project-3'>Github</NavLink>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );

        return (
            <NavContainer>
                <Navbar color='faded' light>
                    <NavbarToggler onClick={this.toggle} className='mr-2' />
                    <NavbarBrand href='' className='mr-auto'>
                        Code Buddy
                    </NavbarBrand>

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>{isAuthenticated ? authLinks : ``}</Nav>
                    </Collapse>
                </Navbar>
            </NavContainer>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    // isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(NavBar);
