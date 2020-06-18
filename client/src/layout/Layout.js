import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    height: 70%;
    width: 70%;
    border: 1px solid #000;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 100px;
    color: white;
    background-color: #190c8a;
`;

const Layout = ({ children }) => (
    <>
        <NavBar />
        <Container>
            <Content>{children}</Content>
        </Container>
    </>
);
export default Layout;
