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
                    code buddy
                </NavbarBrand>

                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href='/'>login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/help'>home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/results'>content</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href=''>github</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </NavContainer>
    );
};

export default NavBar;
