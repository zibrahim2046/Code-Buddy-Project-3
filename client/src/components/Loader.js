import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';
import GetRandomQuote from '../components/Quotes.js';
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
        <Heading>Okay! Let me see what I can find...</Heading>
        <Spinner style={{ width: '3rem', height: '3rem' }} />
        <GetRandomQuote style={{ marginTop: '200px' }} />
    </Container>
);

export default Loader;
