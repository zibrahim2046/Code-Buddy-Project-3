import React from 'react';
import YouTube from 'react-youtube';

const videoID = {
    introToHTML: ['hu-q2zYwEYs', 'kLO4X_3VYdg', 'pm5OVxpul48'],
    stylingHTML: ['yfoY53QXEnI', 'k1PnVor36_40', 's7ONvIgOWdM'],
    advancedHTML: ['1haoknb4m6k', 'kLO4X_3VYdg', 'I_vNgSro7jA'],
    introToHTML: ['hu-q2zYwEYs', 'zHUpx90NerM', 'pm5OVxpul48'],
    introNodeJS: ['TlB_eWDSMt4', 'U8XF6AFGqlc', '8u1o-OmOeGQ'],
    nodeJSmySQL: ['EN6Dx22cPRI', '4fWWn2Pe2Mk', 'aEm0BN493sU'],
    restfulAPI: ['7YcW25PHnAA', 'Q-BpqyOT3a8', 'WfCJ3sHnLBM'],
    introJS: ['W6NZfCO5SIk', '3EMxBkqC4z0', 'PkZNo7MFNFg'],
    forLoopsAndFunctions: ['s9wW2PpJsmQ', 'Au7JCqkVq9M', 'xUI5Tsl2JpY'],
    backEndJavascript: ['0Kv_k4ypj6o', '4r6WdaY3SOA', 'fcvgVfo2GAg'],
    createReactApp: ['pCgDRgmfilE', 'U9T6YkEDkMo', 'MRIMT0xPXFI'],
    es6Syntax: ['AfWYO8t7ed4', 'h33Srr5J9nY', 'IEf1KAcK6A8'],
    conditionalRendering: ['7o5FPaVA9m0', '3wvdq_j5S1c', 'e_hMcTZQ8C0'],
};
const getVideo = (key) => videoID[key][(videoID[key].length * Math.random()) << 0];

class Video extends React.Component {
    render() {
        const opts = {
            height: '400',
            width: '900',
            playerVars: {
                //   https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return <YouTube videoId={getVideo('introToHTML')} opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
}
export default Video;
