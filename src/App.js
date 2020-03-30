import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateProject from './components/CreateProject'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <h1>Hello !!!!</h1>
                </div>
                <Switch>
                    <Route path='/create' component={CreateProject}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
