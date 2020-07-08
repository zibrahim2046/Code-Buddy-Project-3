// import React, { createContext, useState, useEffect } from 'react';
// import Axios from 'axios';

// export const VideoContext = createContext();

// const VideoContextProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         videoID: null,
//     });

//     useEffect(() => {
//         Axios.get(url, { params }).then((data) => {
//             setUser();
//         });
//     }, []);

//     return <VideoContext.Provider value={(user, setUser)}>{children}</VideoContext.Provider>;
// };

// export default VideoContextProvider;
