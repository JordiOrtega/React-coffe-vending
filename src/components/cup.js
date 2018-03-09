import React, { Component } from 'react';

class Cup extends Component {
    
    state = {
        cupofCoffe: (<div className="row mt-5 justify-content-center text-center">
        <div className="col-4">
            {/* <i className="fas fa-warehouse fa-5x"></i> */}
        </div>
    </div>)
    }
    componentDidUpdate() {
        if (this.props.ready === 3) {

            setTimeout(() => {
                this.setState({
                    cupofCoffe :
                    (<div className="row mt-5 justify-content-center text-center">
                        
                        <div className="col-12">
                            <i className="fas fa-utensil-spoon fa-2x rotate mt-2"></i>
                        </div>
                        <div className="col-12">
                            <i className="fas fa-coffee fa-5x"></i>
                        </div>
                    </div>)
                }) 
            }, 4000);

        }


    }
    render() {
            return (
                <div>{this.state.cupofCoffe}</div>
            );
        }
    }

    export default Cup;