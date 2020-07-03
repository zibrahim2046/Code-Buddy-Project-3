// import React from 'react';
// import { Container } from 'reactstrap';
// import VideoPlayer from '../components/VideoPlayer';
// import styled from 'styled-components';
// import ResultsTabs from '../components/ResultsTabs';

// const LinkContainer = styled.div`
//     display: flex;
//     flex-direction: column;
// `;
// const VideoContainer = styled.div`
//     display: flex;
//     flex-direction: row;
// `;

// const links = [
//     {
//         url: 'https://stackoverflow.com/',
//         text: 'Stack Overflow',
//     },
//     {
//         url: 'https://freecodecamp.org',
//         text: 'FreeCodeCamp',
//     },
//     {
//         url: 'https://www.w3schools.com/',
//         text: 'W3 Schools',
//     },
// ];

// const WebLink = ({ url, text }) => (
//     <a target='_blank' href={url}>
//         Here's a link to {text}
//     </a>
// );

// const ResultsContainer = (props) => (
//     <Container className='themed-container'>
//         <VideoContainer>
//             <VideoPlayer />
//             <VideoPlayer />
//             <VideoPlayer />
//         </VideoContainer>

//         <LinkContainer>
//             {links.map(({ url, text }, index) => (
//                 <WebLink key={index} url={url} text={text} />
//             ))}
//         </LinkContainer>
//     </Container>
// );

// export default ResultsContainer;
