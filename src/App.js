import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'

class App extends Component {
  render(){
    return(
      <Switch>
        <Route exact path="/" component={Home}/>  
        <Route exact path="/gallery" component={Gallery}/>  
        <Route exact path="/about" component={About}/>  
        <Route exact path="/contact" component={Contact}/>  
      </Switch>
    )
  }
}

export default App;
