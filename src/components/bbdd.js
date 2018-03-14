import React, { Component } from 'react';
import axios from '../axios';

class Bbdd extends Component {

    state = {
        machine: null
    }

    componentDidMount () {
        axios.get('https://react-coffee-vending.firebaseio.com/machine.json')
        .then(response => {
            this.setState({machine: response.data})
            console.log(response.data);
        });

    }

    render() {
        return (
            <div>
                <p>axios-firebase</p> <br />
                <p>Coffee: {this.state.machine ? this.state.machine.coffee : null} </p>
                <p>Sugar: {this.state.machine ? this.state.machine.sugar : null} </p>
                <p>Spoons: {this.state.machine ? this.state.machine.spoons : null} </p>
                <p>Cups: {this.state.machine ? this.state.machine.cups : null} </p>
            </div>
        );
    }
}

// Sugar max on machine --> 160g || Each line --> 2,67g || All lines: 16,02g || by defaul 3 lines --> 8,01g
// Cups max on machine --> 10units
// Spoons max on machine --> 10 units
// Coffee max on machine--> 80g || each coffe uses the same amount of caffe x cup: 8g
                            // corto (ristretto)    (minus watter, more concentrated and intense)
                            // largo (lungo)        (more watter, more bitter)

export default Bbdd;