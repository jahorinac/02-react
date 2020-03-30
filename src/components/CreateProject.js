import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateProject extends Component{
    render() {
        return(
            <div className="container">
                <h2>Projects</h2>
                <Link to='/'>Back</Link>
            </div>
        )
    }
}

export default CreateProject