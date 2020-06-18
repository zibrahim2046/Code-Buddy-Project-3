import React from 'react';
import * as Quotes from '../quotes.json';


    React.render (){}
    getRandomQuote () {
      let keys = Object.keys(Quotes)
      return Quotes[keys[keys.length * Math.random() << 0]];
    }
    render () {
        return (
            <div>
                <div className="PageContainer">
                    <h1>Welcome</h1>
                    <div id="quotes">Here is a quote for you:<p id="quote_text">{this.getRandomQuote()}</p></div>
                </div>
            </div>
        );
    }

export default Quotes;