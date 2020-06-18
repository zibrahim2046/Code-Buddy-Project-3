import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';

const NavContainer = styled.div`
    width: 100%;
    position: absolute;
    right: 0;
`;

const NavBar = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <NavContainer>
            <Navbar color='faded' light>
                <NavbarToggler onClick={toggleNavbar} className='mr-2' />
                <NavbarBrand href='/' className='mr-auto'>
                    reactstrap
                </NavbarBrand>

                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href='/components/'>Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </NavContainer>
    );
};

export default NavBar;
