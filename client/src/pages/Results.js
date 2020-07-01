import React, { useState, useEffect } from 'react';
// import { Button } from 'reactstrap';
import Loader from '../components/Loader';
// import ResultsCarousel from '../components/Carousel';
// import ResultsContainer from '../components/ResultsContainer';
import ResultsTabs from '../components/ResultsTabs';
import ResultsContainer from '../components/ResultsContainer';

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
                    <ResultsTabs />
                    {/* <ResultsCarousel /> */}
                    {/* <ResultsContainer /> */}
                </>
            )}
        </div>
    );
};

export default Results;
