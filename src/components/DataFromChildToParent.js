import React, { Component } from 'react';

class DataFromChildToParent extends Component{

    state = {
        counter2: "state from child"
    }

    render(){
        return(
            <div className="container">
                <button onClick={this.props.data(this.state.counter2)}>Click me</button>
                <span>{this.state.counter2}</span>
            </div>
        )
    }
}


export default DataFromChildToParent