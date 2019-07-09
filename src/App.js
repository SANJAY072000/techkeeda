import React,{Component} from 'react';
import Navbar from './components/Navbar';
import Home from './components/home/Home';
import Dev from './components/dev/Dev';
import News from './components/news/News';
import Font from './components/dev/Font';
import Grad from './components/dev/Grad';
import {BrowserRouter as Router,Route} from 'react-router-dom';

export default class App extends Component {
  render(){
    return(
      <Router>
      <div>
      <Navbar/>
      <Route path="/" exact component={Home}/>
      <Route path="/news" component={News}/>
      <Route path="/dev" component={Dev}/>
      <Route path="/fonts" component={Font}/>
      <Route path="/grads" component={Grad}/>
      </div>
      </Router>
    );
  }
}
