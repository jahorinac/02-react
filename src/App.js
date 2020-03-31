import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage, { MyContext } from './components/MainPage'
import CreateProject from './components/CreateProject'
import DataFromChildToParent from './components/DataFromChildToParent'


class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: "state from parent"
        }
    }

    update(value){
        return ()=>{
            this.setState({
                counter: value
            })
        }
    }

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <span>{this.state.counter}</span>
                    <DataFromChildToParent data={this.update.bind(this)}/>
                    <Switch>
                        //ToDo - realize Provider/Consumer simpler (example in bookmark)
                        <MyContext.Provider value="Hello from Provider">
                            <Route exact path='/' component={MainPage}/>
                            <Route path='/create' component={CreateProject}/>
                        </MyContext.Provider>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
