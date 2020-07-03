import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
// import { connect } from 'react-redux;';
// import PropTypes from 'prop-types';

const Container = styled.main`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    height: 70%;
    width: 70%;
    border: 1px solid #000;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 100px;
    color: white;
    background-color: #190c8a;
`;

const Layout = ({ children }) => (
    <>
        <NavBar />
        <Container>
            <Content>{children}</Content>
        </Container>
    </>
);
export default Layout;

// class Layout extends Component {
    

//     static propTypes = {
//         auth: PropTypes.object.isRequired,
//         // isAuthenticated: PropTypes.bool
//     }

       
//     render() {
//         const { isAuthenticated, user } = this.props.auth;

//         return(
//             <div>
//                 <NavBar />
//                 <Container>
//                     <Content>{children}</Content>
//                 </Container>
//             </div>
//         );
//     }

// };

// const mapStateToProps = state => ({
// auth: state.auth,
// // isAuthenticated: state.auth.isAuthenticated
// })

// export default connect(mapStateToProps, null)(Layout);