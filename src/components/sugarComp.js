import React from 'react';

import Sugar from './sugar';

const sugarComp = (props) => {
    return (
        <div className="row pt-2 pb-2 justify-content-center border border-light">
            <div className="col-12">
                <strong>-2-</strong>
            </div>
            <Sugar handleSugar={props.handleSugar}>plus </Sugar>
            <Sugar handleSugar={props.handleSugar}>minus</Sugar>
        </div>
    );
}

export default sugarComp;