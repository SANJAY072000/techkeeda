import React,{Component} from 'react';
import Lf from '../Lf';
import Deliver from './Deliver';

export default class Dev extends Component {
  componentWillMount(){
      if(localStorage.getItem('user'))
      this.setState({token:localStorage.getItem('user')});
  }
  constructor(props){
    super(props);
    this.state = {
      token:''
    };
  }
  render(){
    let deliver;
    if(this.state.token)
    deliver=<Deliver/>
    else deliver=<Lf/>
    return(
      <div>
      {deliver}
      </div>
    );
  }
}
