import React from 'react';
import { Container } from 'reactstrap';
import VideoPlayer from '../components/VideoPlayer';

const ResultsContainer = (props) => {
    return (
        <>
            <Container className='themed-container'>
                <VideoPlayer />
            </Container>
        </>
    );
};

export default ResultsContainer;
