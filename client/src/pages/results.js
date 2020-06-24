import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Loader from '../components/Loader';
import ResultsCarousel from '../components/Carousel';
// import YouTube from 'react-youtube';

// class Video extends React.Component {
//     render() {
//         const opts = {
//             height: '195',
//             width: '320',
//             playerVars: {
//                 //   https://developers.google.com/youtube/player_parameters
//                 autoplay: 1,
//             },
//         };

//         return <YouTube videoId='sBws8MSXN7A' opts={opts} onReady={this._onReady} />;
//     }

//     _onReady(event) {
//         // access to player in all event handlers via event.target
//         event.target.pauseVideo();
//     }
// }

const Results = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3500);
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <p>
                        <h3>Here are some useful resources, Happy Coding!</h3>
                        {/* <Video /> */}
                        <ResultsCarousel />
                    </p>
                    {/* <Button style={{ marginRight: 50 }} color='secondary'>
                        Yes!
                    </Button>{' '}
                    <Button style={{ marginRight: 50 }} color='secondary'>
                        No, not quite...
                    </Button>{' '}
                    <Button style={{ marginRight: 50 }} color='secondary'>
                        Let's start over
                    </Button> */}
                </>
            )}
        </div>
    );
};

export default Results;
