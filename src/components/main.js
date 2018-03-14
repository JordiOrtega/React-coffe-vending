import React from 'react';

import CoffeMachine from './coffeMachine';
import Bbdd from './bbdd';

const main = (props) => {
    return (
        <main>
            <div className="row">
                <div className="col-9 col-sm-6">
                    <CoffeMachine 
                         title={props.title}
                         secondarytext={props.secondarytext}
                         makingCoffe={props.makingCoffe}
                         sugar={props.sugar}
                         handleEmployeec={props.handleEmployeec}
                         handleSugar={props.handleSugar}
                         handleCoffe={props.handleCoffe}
                         ready={props.ready}
                    />
                </div>
                <div className="col-3 col-sm-4">
                    <Bbdd />
                </div>
            </div>
        </main>
    );
}

export default main;