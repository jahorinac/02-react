import React, { Component } from 'react';

class DataFromChildToParent extends Component{

    state = {
        inputField: "from grandchild"
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.propFromParent(this.state.inputField)

        this.setState({
            inputField:''
        })
    }

    handleChange = e => {
        this.setState({
            inputField: e.target.value
        })
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type='text'
                        id='theIinput'
                        value={this.state.inputField}
                        onChange={this.handleChange}
                    />
                    <input type="submit"/>
                </form>
                <h5>Visible in child:<br/>{this.state.inputField}</h5>
            </div>
        )
    }
}

export default DataFromChildToParent