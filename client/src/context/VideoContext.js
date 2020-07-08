import React, { Component, createContext } from 'react';



export const VideoContext = createContext();
class VideoContextProvider extends Component {
    state = { videoID=[
        htmlCss = [
            {
                title: 'Intro to HTML/CSS',
                topic: 'introToHTML',
            },
            {
                title: 'Styling your HTML',
                topic: 'stylingHTML',
            },
            {
                title: 'Advanced HTML/CSS',
                topic: 'advancedHTML',
            },
        ],
        node = [
            {
                title: 'Intro to NodeJS',
                topic: 'introNodeJS',
            },
            {
                title: 'NodeJS and MYSQL',
                topic: 'nodeJSmySQL',
            },
            {
                title: 'Restful API',
                topic: 'restfulAPI',
            },
        ],
        js = [
            {
                title: 'Intro to Javascript',
                topic: 'introJS',
            },
            {
                title: 'For Loops and Functions',
                topic: 'forLoopsAndFunctions',
            },
            {
                title: 'Back End Javascript',
                topic: 'backEndJavascript',
            },
        ],
        react = [
            {
                title: 'Create-React-App',
                topic: 'createReactApp',
            },
            {
                title: 'ES6 Syntax',
                topic: 'es6Syntax',
            },
            {
                title: 'Conditional Rendering',
                topic: 'conditionalRendering',
            },
        ]
    ]}
    render() {
        return( 
            <VideoContext.Provider value={{...this.state}}>
                { this.props.children}
            </VideoContext.Provider>
        )}
}

export default VideoContextProvider;