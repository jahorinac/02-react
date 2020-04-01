import React, { Component } from 'react';

class DataFromChildToParent extends Component{

    state = {
        source2: "state from child"
    }

    render(){
        return(
            <div className="container">
                <button onClick={this.props.propFromParent(this.state.source2)}>Click me</button>
                <span>{this.state.source2}</span>
            </div>
        )
    }
}

export default DataFromChildToParent