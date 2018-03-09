import React from 'react';

const employeec = (props) => {
    return (
        <div className="row ">
        <div className="col">
            <div className="row ">
                <div className="col bg-light mt-3 p-0 blink_me">
                    <strong>-1-</strong><br />
                        <a 
                            onMouseOver={() => props.handleEmployeec(1)}
                            onClick={() => props.handleEmployeec(1)}
                        >
                            <i className="material-icons"  >credit_card</i>
                        </a>
                </div>
            </div>
            <div className="row "></div>
        </div>
        </div>
    );
}

export default employeec;