import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap';
import Loader from '../components/Loader';

const Results = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h1>User, here's what i found</h1>
                    <h2>was this helpful?</h2>
                    <Button color='primary'>yes, thank you Code Buddy!</Button>{' '}
                    <Button color='secondary'>no, not quite...</Button>{' '}
                    <Button color='success'>let's start over</Button>
                </>
            )}
        </div>
    );
};

export default Results;
