import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';

const Results = () => {
    return (
        <div>
            <h1>User, here's what i found</h1>
            <h2>was this helpful?</h2>
            <Button color='primary'>yes, thank you Code Buddy!</Button>{' '}
            <Button color='secondary'>no, not quite...</Button> <Button color='success'>let's start over</Button>
        </div>
    );
};
export default Results;