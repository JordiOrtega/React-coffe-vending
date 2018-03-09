import React from 'react';

const viewers = (props) => {
    return (
        <div className="row mt-2 justify-content-center">
            <div className="col-10 bg-light p-2 mt-1">
                <p><small>{props.title}<span id="addTitle">{(props.title === "Bebida lista")?"":undefined}</span></small> <br />
                <small><strong>{props.secondarytext}</strong></small><br /><span id="secondarytext">{(props.secondarytext === "Café seleccionado:")?"":undefined}</span></p>
            </div>
        </div>
    );
}

// Specifies the default values for props:
viewers.defaultProps = {
    title: 'Bienvenido a React Coffe Vending',
    secondarytext: '1 - Acerca tu tarjeta al lector'
  };

export default viewers;