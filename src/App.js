import React, { Component } from 'react';
import Header from './components/header';
import Viewers from './components/viewers';
import Cup from './components/cup';
import Employeec from './components/employeec';
import Sugar from './components/sugar';
import Coffesel from './components/coffesel';


class App extends Component {

    state = {
        title: "",
        secondarytext: "",
        makingCoffe: 0,
        sugar: 3
    }
    
    componentDidUpdate(prevProps, prevState){ 
       if (this.state.makingCoffe > 0 && this.state.title !== prevState.title){
           const messages = require('./viewers.json');
            setTimeout(() => {
                this.setState({ 
                    title: messages[this.state.makingCoffe].timeout[0],
                    secondarytext: messages[this.state.makingCoffe].timeout[1],
                });
                console.log("dentro del setTimeout" + messages[this.state.makingCoffe].timeout[0]);    
              }, 4000);

              clearTimeout();
        }
}

    printMessage = (makingCoffe) =>{
        console.log("valor de makingcoffe: " + this.state.makingCoffe);
        const messages = require('./viewers.json');
        
        this.setState({ title: messages[makingCoffe].title });
        this.setState({ secondarytext: messages[makingCoffe].secondarytext});
    }
    drawBars = (numOfBars) => {
        let i = 0;
        let returnBars = [];
            for (i; i < numOfBars; i++){
                returnBars[i] =  "<i class='fas fa-bars rotate2'></i>"
            }
        return returnBars;
    }        
    handleSugar = (e) => {
        if ((e === 1 && this.state.sugar < 6) || (e === -1 && this.state.sugar > 0) ){
            
                this.setState({sugar: this.state.sugar + e});
                let drawedBars = this.drawBars(this.state.sugar + e);
                let mySpan = document.getElementById("secondarytext"); 
                mySpan.innerHTML = "Azúcar: " + drawedBars.join(" ");
        }
    }
    handleClick = (e, moreinfo) => {
        this.setState({makingCoffe: e});
        this.printMessage(e);
        if (moreinfo){
            let mySpan = document.getElementById("addTitle"); 
            mySpan.innerHTML = moreinfo;
        } 
        
        
    }
   
    render() {
        return (
            <div className="container">
                <Header />
                <main>
                    <div className="row">
                        <div className="col-9 col-sm-6">
                            <div className="Coffe-machine text-center">
                                <Viewers
                                    title={this.state.makingCoffe > 0 ? this.state.title : undefined}
                                    secondarytext={this.state.makingCoffe > 0 ? this.state.secondarytext : undefined}
                                />
                                <div className="row mt-2 justify-content-around text-center">
                                    <Employeec 
                                        handleEmployeec={this.handleClick}
                                    />
                                    <div className="col-3 border border-light mt-3">
                                        <div className="row pt-2 pb-2 justify-content-center border border-light">
                                            <div className="col-12">
                                                <strong>-2-</strong>
                                            </div>
                                            <Sugar
                                                handleSugar={this.handleSugar}
                                                >plus
                                            </Sugar>
                                            <Sugar
                                                handleSugar={this.handleSugar}
                                                >minus
                                            </Sugar>
                                        </div>
                                            <strong>-3-</strong><br />
                                            <Coffesel
                                                handleCoffe={this.handleClick}
                                                >Corto
                                            </Coffesel>
                                            <Coffesel
                                                handleCoffe={this.handleClick}
                                                >Largo
                                            </Coffesel>
                                        
                                    </div>
                                </div>
                              <Cup 
                                ready={this.state.makingCoffe}
                              />
                            </div>
                        </div>
                        <div className="col-3 col-sm-4"></div>
                    </div>
                </main>
                <footer></footer>
            </div>
        );
    }
}

export default App;
