import React from 'react';

const sugar = (props) => {
    const typeofbutton = (props.children === "minus") ? "fas fa-minus-circle fa-2x text-light" : "fas fa-plus-circle fa-2x text-light";
    return (
            <div className="col-6 p-0">
                <a onClick={() => props.handleSugar(2)}><i className={typeofbutton}></i></a>
            </div>
    );
}

export default sugar;