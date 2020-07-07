import React, { useState, useEffect } from 'react';
// import { Button } from 'reactstrap';
import Loader from '../components/Loader';
// import ResultsCarousel from '../components/Carousel';
// import ResultsContainer from '../components/ResultsContainer';
import ResultsTabs from '../components/ResultsTabs';
import { useLocation } from 'react-router-dom';

const Results = () => {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { topic } = location.state;

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
                    <ResultsTabs topic={topic} />
                </>
            )}
        </div>
    );
};

export default Results;
