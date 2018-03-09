import React from 'react';

const coffesel = (props) => {
    return (

        <div className="row mt-2 mb-2 justify-content-start">
            <div className="col p-0">
                <button type="button" className="btn btn-dark" onClick={() => props.handleCoffe(3)}>{props.children}</button>
            </div>
        </div>
    );
}

export default coffesel;