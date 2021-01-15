import React from 'react';


const Card = (props) => {
    return(
        <div className="card">
            <h1>Card</h1>

            <button onClick={() => props.history.goBack()} className="back-btn">
                Back
            </button>
        </div>
        
    )
}

export default Card;