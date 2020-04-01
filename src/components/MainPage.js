import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DataFromChildToParent from './DataFromChildToParent'

const MyContext = React.createContext("anything");

class MainPage extends Component{

    render(){
        return(
            <div className="main">
                <DataFromChildToParent propFromParent={this.props.propFromGrandParent}/>
                <Link to='/create'>Create Project</Link>
            </div>
        )
    }
}
export { MyContext };
export default MainPage;