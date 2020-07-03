import React, { useState, Component, Fragment } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginModal from '../components/auth/LoginModal';
import Logout from './auth/Logout'


const NavContainer = styled.div`
    width: 100%;
    position: absolute;
    right: 0;
`;

<<<<<<< HEAD
const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <NavContainer>
            <Navbar color='faded' light>
                <NavbarToggler onClick={toggleNavbar} className='mr-2' />
                <NavbarBrand href='' className='mr-auto'>
                    Code Buddy
                </NavbarBrand>

                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href='/'>Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/help'>Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href='/results'>Content</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/saved'>Saved</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://github.com/zibrahim2046/Code-Buddy-Project-3'>Github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </NavContainer>
    );
=======
// const NavBar = (props) => {
//     const [collapsed, setCollapsed] = useState(true);

//     const toggleNavbar = () => setCollapsed(!collapsed);

//     return (
//         <NavContainer>
//             <Navbar color='faded' light>
//                 <NavbarToggler onClick={toggleNavbar} className='mr-2' />
//                 <NavbarBrand href='' className='mr-auto'>
//                     Code Buddy
//                 </NavbarBrand>

//                 <Collapse isOpen={!collapsed} navbar>
//                     <Nav navbar>
//                         <NavItem>
//                             <NavLink href='/help'>Home</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href='/results'>Content</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href='https://github.com/zibrahim2046/Code-Buddy-Project-3'>Github</NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <Logout />
//                         </NavItem>
//                     </Nav>
//                 </Collapse>
//             </Navbar>
//         </NavContainer>
//     );
// };

// const [collapsed, setCollapsed] = useState(true);

// const toggleNavbar = () => setCollapsed(!collapsed);

class NavBar extends Component {
        state = {
            isOpen: false
        };

        static propTypes = {
            auth: PropTypes.object.isRequired,
            // isAuthenticated: PropTypes.bool
        }

        toggle = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
        
        render() {
            const { isAuthenticated, user } = this.props.auth;

            const authLinks = (
                <Fragment>
                    <NavItem>
                        <NavLink href='/help'>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/results'>Content</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='https://github.com/zibrahim2046/Code-Buddy-Project-3'>Github</NavLink>
                    </NavItem>
                    <NavItem>
                        <Logout />
                    </NavItem>
                </Fragment>
            )

            return(
                <NavContainer>
                    <Navbar color='faded' light>
                        <NavbarToggler onClick={this.toggle} className='mr-2' />
                        <NavbarBrand href='' className='mr-auto'>
                            Code Buddy
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                { isAuthenticated ? authLinks : `` }
                            </Nav>
                        </Collapse>  
                    </Navbar>
                </NavContainer>
            );
        }

>>>>>>> 70df704eed65df2441d9137c0fefb4831e32c749
};

const mapStateToProps = state => ({
    auth: state.auth,
    // isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, null)(NavBar);
