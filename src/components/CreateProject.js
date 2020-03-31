import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from './MainPage'


class CreateProject extends Component{
    render() {
        return(
            <div className="container">
                <h2>Projects</h2>
                <Link to='/'>Back</Link>
                <MyContext.Consumer>
                    { value => (
                        <p>
                            {value}
                        </p>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default CreateProject