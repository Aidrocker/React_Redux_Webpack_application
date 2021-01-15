import React from 'react';


const Error = (props) => {

    return(
        <div style={{textAlign:'center'}}>
            <h1>ERROR</h1>
            <div class="alert alert-danger" role="alert">
                Error
            </div>
            <button onClick={() => props.history.push('/') }>GO TO MAIN PAGE</button>
        </div>
    )
}

export default Error;