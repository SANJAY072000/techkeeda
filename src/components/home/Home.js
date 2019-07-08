import React,{Component} from 'react';
import Header from './Header';
import Section from './Section';
import Fun from './Fun';
import Number from './Number';
import YouTube from './YouTube';

export default class Home extends Component {
  render(){
    return(
      <div>
      <Header/>
      <Section/>
      <Fun/>
      <Number/>
      <YouTube/>
      </div>
    );
  }
}
