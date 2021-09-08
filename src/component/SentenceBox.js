import React from 'react';

const SentenceBox = ({num, numSentence}) => {
    // console.log({numSentence})
    return (
        <div className="tc bg-light-gray dib br4 pa4 ma3 grow bw2 shadow-5">
            <div>
                <h2><span className="b--dashed b--dark-pink f2 lh-title black">{ num }</span></h2>
                <p className="ba b--dotted bw1 b--light-blue f3 lh-title"> { numSentence } </p>
            </div>
        </div>
        )
}

export default SentenceBox;