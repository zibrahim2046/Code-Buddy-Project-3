import React from 'react';
import Video from '../components/VideoPlayer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SaveBtn from '../components/SaveBtn';
import styled from 'styled-components';

const Container = styled.div`
    height: 400px;
    width: 900px;
`;

const ResultsCarousel = () => {
    return (
        <Container>
            <Carousel>
                <div>
                    <Video />
                    <p>
                        <SaveBtn />
                    </p>
                </div>
                <div>
                    <Video />
                    <p>
                        <SaveBtn />
                    </p>
                </div>
                <div>
                    <Video />
                    <p>
                        <SaveBtn />
                    </p>
                </div>
            </Carousel>
        </Container>
    );
};
export default ResultsCarousel;
