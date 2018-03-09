import React from 'react';

const viewers = (props) => {
    return (
        <div className="row mt-2 justify-content-center">
            <div className="col-10 bg-light p-2 mt-1">
                <p><small>{props.title}</small> <br />
                    <small><strong>{props.secondarytext}</strong></small></p>
            </div>
        </div>
    );
}

// Specifies the default values for props:
viewers.defaultProps = {
    title: 'Bienvenido a React Coffe Vending',
    secondarytext: '1 - Pulse tarjeta de empleado'
  };

export default viewers;