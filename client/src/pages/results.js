import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import Loader from '../components/Loader';
import YouTube from 'react-youtube';

class Video extends React.Component {
    render() {
        const opts = {
            height: '195',
            width: '320',
            playerVars: {
                //   https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return <YouTube videoId='sBws8MSXN7A' opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}

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
                    <h1>User, here's what I found</h1>
                    <p>
                        <Video />
                    </p>
                    <h2>Was this helpful?</h2>
                    <Button style={{ marginRight: 50 }} color='secondary'>
                        Yes!
                    </Button>{' '}
                    <Button style={{ marginRight: 50 }} color='secondary'>
                        No, not quite...
                    </Button>{' '}
                    <Button style={{ marginRight: 50 }} color='secondary'>
                        Let's start over
                    </Button>
                </>
            )}
        </div>
    );
};

export default Results;
