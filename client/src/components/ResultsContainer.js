import React from 'react';
import { Container } from 'reactstrap';
import VideoPlayer from '../components/VideoPlayer';
import styled from 'styled-components';

const LinkContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const links = [
    {
        url: 'https://stackoverflow.com/',
        text: 'Stack Overflow',
    },
    {
        url: 'https://freecodecamp.org',
        text: 'FreeCodeCamp',
    },
    {
        url: 'https://www.w3schools.com/',
        text: 'W3 Schools',
    },
];

const WebLink = ({ url, text }) => (
    <a target='_blank' href={url}>
        Here's a link to {text}
    </a>
);

const ResultsContainer = (props) => (
    <Container className='themed-container'>
        <VideoPlayer />
        <LinkContainer>
            {links.map(({ url, text }, index) => (
                <WebLink key={index} url={url} text={text} />
            ))}
        </LinkContainer>
    </Container>
);

export default ResultsContainer;
