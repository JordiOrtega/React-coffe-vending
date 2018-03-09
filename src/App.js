import React, { Component } from 'react';
import Header from './components/header';
import Main from './components/main';


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
                <Main 
                     title={this.state.title}
                     secondarytext={this.state.secondarytext}
                     makingCoffe={this.state.makingCoffe}
                     sugar={this.state.sugar}
                     handleEmployeec={this.handleClick}
                     handleSugar={this.handleSugar}
                     handleCoffe={this.handleClick}
                     ready={this.state.makingCoffe}
                />
                <footer></footer>
            </div>
        );
    }
}

export default App;
