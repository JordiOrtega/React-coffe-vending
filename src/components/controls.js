import React from 'react';

import Employeec from './employeec';
import SugarCoffe from './sugarCoffe';

const controls = (props) => {
    return (
        <div className="row mt-2 justify-content-around text-center">
            <Employeec handleEmployeec={props.handleEmployeec} />
            <SugarCoffe 
                handleSugar={props.handleSugar}
                handleCoffe={props.handleCoffe}
            />
        </div>
    );
}

export default controls;