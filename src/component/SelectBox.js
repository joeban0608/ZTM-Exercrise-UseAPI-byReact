import React from 'react';

const SelectBox = ({ valueReset, selectChange }) => {
    return (
        <div className="pa4">
            <label className="f3 lh-title pa3 ba b--green bg-lightest-blue tc dib">
                <span className="black">Pick your random type: </span>
                <select value={ valueReset } onChange={selectChange}>
                    <option value="trivia">Trivia</option>
                    <option value="year">Year</option>
                    <option value="date">Date</option>
                    <option value="math">Math</option>
                </select>
            </label>
        </div>

    )
}

// for Loading page
export const SelectBoxForLoading = ({ valueReset, selectChange }) => {
    
    return (
        <div className="pa4">
            <label className="f3 diblh-title pa3 ba b--green bg-lightest-blue tc dib">
                <span className="black">Pick your random type: </span>
                <select value={ valueReset } onChange={selectChange}>
                    <option value="None">None</option>
                    <option value="trivia">Trivia</option>
                    <option value="year">Year</option>
                    <option value="date">Date</option>
                    <option value="math">Math</option>
                </select>
            </label>
        </div>

    )
}
export default SelectBox;