import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MainPage extends Component{
    render(){
        return(
            <div className="main">
                <Link to='/create'>Create Project</Link>
            </div>
        )
    }
}

export default MainPage