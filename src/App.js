import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage from './components/MainPage'
import CreateProject from './components/CreateProject'



class App extends Component {

    render() {

        return (
            <BrowserRouter>
                <div className="App">
                    <Switch>
                        <Route exact path='/' component={MainPage}/>
                        <Route path='/create' component={CreateProject}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
