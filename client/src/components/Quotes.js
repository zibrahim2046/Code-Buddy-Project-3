import React from 'react';
import quotes from '../assets/quotes.js';

const getQuote = () => {
    let keys = Object.keys(quotes);
    const { quote } = quotes[keys[(keys.length * Math.random()) << 0]];

    return quote;
};

const GetRandomQuote = ({ style }) => {
    return (
        <section style={style} className='quotes'>
            <div id='quotes'>
                <p> {getQuote()}</p>
            </div>
        </section>
    );
};

export default GetRandomQuote;
