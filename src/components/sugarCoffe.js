import React from 'react';

import SugarComp from './sugarComp';
import Coffesel from './coffesel';

const sugarCoffe = (props) => {
    return (
        <div className="col-3 border border-light mt-3">
            <SugarComp 
                handleSugar={props.handleSugar}
            />

            <strong>-3-</strong><br />
            <Coffesel handleCoffe={props.handleCoffe}>Corto</Coffesel>
            <Coffesel handleCoffe={props.handleCoffe}>Largo</Coffesel>
        </div>
    );
}

export default sugarCoffe;