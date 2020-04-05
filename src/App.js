import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainPage, { MyContext } from './components/MainPage'
import CreateProject from './components/CreateProject'



class App extends Component {

    state = {
        source: "state from grandparent",
    }

    update = value => {
        this.setState({
            source: value
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <span>{this.state.source}</span>
                    <Switch>
                        //ToDo - realize Provider/Consumer simpler (example in bookmark)
                        <MyContext.Provider value="Hello from Context Parent">
                            <Route exact path='/'
                            render={(routeProps) => (<MainPage {...routeProps} propFromGrandParent={this.update}/>)}
                            />
                            <Route path='/create' component={CreateProject}/>
                        </MyContext.Provider>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
