import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
            overflowY: 'scroll',
            border: 'thick double',
            height: '400px'
        }}>
            {props.children}
        </div>
    )
}

export default Scroll;