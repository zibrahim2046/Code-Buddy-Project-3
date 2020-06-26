import React, { Component } from 'react';
import Video from '../components/VideoPlayer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// const Carousel = styled.div`
//     height: 100%;
//     width: 100%;
//     background-color: blue;
// `;

const ResultsCarousel = () => {
    return (
        // <Container>
        <Carousel>
            <div>
                <Video />
                {/* <img src='assets/1.jpeg' /> */}
                <p>
                    <button id='save' style={{ marginBottom: 50 }} onclick='myFunction()'>
                        Save
                    </button>
                </p>
            </div>
            <div>
                {/* <img src='assets/2.jpeg' /> */}
                <p>
                    {' '}
                    <button id='save' onclick='myFunction()'>
                        Save
                    </button>
                </p>
            </div>
            <div>
                {/* <img src='assets/3.jpeg' /> */}
                <p>
                    {' '}
                    <button id='save' onclick='myFunction()'>
                        Save
                    </button>
                </p>
            </div>
        </Carousel>
        // </Container>
    );
};
export default ResultsCarousel;
