import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MyContextConsumer } from './MainPage'


class CreateProject extends Component{
    render() {
        return(
            <div className="container">
                <h2>Projects</h2>
                <Link to='/'>Back</Link>
                <MyContextConsumer>{({ title }) => <h1>{title}</h1>}</MyContextConsumer>
            </div>
        )
    }
}

export default CreateProject