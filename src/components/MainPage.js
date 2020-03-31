import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MyContext = React.createContext("anything");

// const MyContextConsumer = MyContext.Consumer;
//
// const someData = {title: "Hello World"};


class MainPage extends Component{

    render(){

        return(
            <div className="main">
                <Link to='/create'>Create Project</Link>
                {/*<MyContext.Provider value={someData}>{this.props.children}</MyContext.Provider>*/}
            </div>
        )
    }
}
export { MyContext };
//export { MyContextConsumer };
export default MainPage;