import React from 'react';

import Viewers from './viewers';
import Controls from './controls';
import Cup from './cup';

const coffeMachine = (props) => {
    return (
        <div className="Coffe-machine text-center">
            <Viewers
                title={props.makingCoffe > 0 ? props.title : undefined}
                secondarytext={props.makingCoffe > 0 ? props.secondarytext : undefined}
            />
            <Controls 
                handleEmployeec={props.handleEmployeec}
                handleSugar={props.handleSugar}
                handleCoffe={props.handleCoffe}
            />
             <Cup ready={props.ready}/>
        </div>
    );
}

export default coffeMachine;