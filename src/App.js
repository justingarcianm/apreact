import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home'

class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" render={() => <Home/>}/>
        <Route exact path="/:id"/>
      </Switch>
    )
  }
}

export default App;
