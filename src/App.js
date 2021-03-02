import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from '../src/hoc/Layout/Layout'
import Toolbar from '../src/components/UI/Toolbar/Toolbar'
import {Switch , Route} from 'react-router-dom'
import Welcome from './containers/Welcome/Welcome'
import Todo from './containers/Todo/Todo'
import Logout from './containers/Logout/Logout'
class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
<Layout>
<Toolbar />
<Switch>
  <Route path="/todo" component={Todo} />
  <Route path="/logout" component={Logout} />
    <Route path="/" component={Welcome} exact />
    <Route render={()=> {
      return(<h2 style={{color:'black',marginTop:'70px'}}>Page not found :( </h2>)
    }} />
</Switch>
</Layout>


      </div>
    );
  }
}

export default App;
