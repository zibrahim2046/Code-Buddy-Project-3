import React from 'react';
import Video from '../components/VideoPlayer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import DeleteBtn from '../components/DeleteBtn';

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
                        <DeleteBtn />
                    </p>
                </div>
                <div>
                    <Video />
                    <p>
                        <DeleteBtn />
                    </p>
                </div>
                <div>
                    <Video />
                    <p>
                        <DeleteBtn />
                    </p>
                </div>
            </Carousel>
        </Container>
    );
};
export default ResultsCarousel;
