import React from 'react';

const employeec = (props) => {
    return (
        <div className="col-2 bg-light mt-3 p-0 blink_me">
            <strong>-1-</strong><br />
                <a onClick={() => props.handleEmployeec(1)}>
                    <i className="material-icons"  >credit_card</i>
                </a>
        </div>
    );
}

export default employeec;