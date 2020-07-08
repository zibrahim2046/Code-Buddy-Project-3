import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

const VideoContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        videoID: null,
    });

    return <VideoContext.Provider value={(user, setUser)}>{children}</VideoContext.Provider>;
};

export default VideoContextProvider;
