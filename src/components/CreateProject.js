import React, { Component } from 'react';

class CreateProject extends Component{
    render() {
        console.log(this.props)
        return(
            <h2>{this.props.value}</h2>
        )
    }
}

export default CreateProject