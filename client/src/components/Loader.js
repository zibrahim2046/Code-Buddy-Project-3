import React from 'react';
import logo from '../assets/images/spinner.gif';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h1`
    text-align: center;
`;

const Loader = () => (
    <Container>
        <Heading>okay! let me see what i can find...</Heading>
        <img src={logo} alt='loading...' />
    </Container>
);

export default Loader;
