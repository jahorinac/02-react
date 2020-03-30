import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateProject from './components/CreateProject'
class App extends Component {

    state ={
        data:'Opet to to'
    }

    render() {
        console.log(this.props)
        return (
            <BrowserRouter>
                <div className="App">
                    <h1>{this.state.data}</h1>
                    <CreateProject value={this.state.data}/>
                </div>
                <Switch>
                    <Route path='/create' component={CreateProject}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
