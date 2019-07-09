import React,{Component} from 'react';
import axios from 'axios';
import Lf from '../Lf';

export default class Grad extends Component {
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
    deliver=<RGrad/>
    else deliver=<Lf/>
    return(
      <div>
        {deliver}
      </div>
    );
  }
}

class RGrad extends Component {
  componentDidMount(){
    axios({
      url:'https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json'
    })
    .then(res=>this.setState({colors:res.data}))
    .catch(err=>console.log(err));
  }
  constructor(props){
    super(props);
    this.state = {
      colors:[]
    };
  }
  render(){
    return(
      <div>
      <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-5 text-center lead">
          Check out some awesome gradients !
          </h1>
          <p className="mt-5 text-center text-muted">
          Click on any gradient and get the hex value there.
          </p>
        </div>
      </div>
      <div className="row mt-4">{
          this.state.colors.map((a,i)=>
        <div key={i} className="col-lg-2 col-offset-3 col-6 mx-5 mx-lg-3 mt-4 rounded text-light d-flex justify-content-center align-items-center"
        style={{"background":`linear-gradient(${a.colors[0]},${a.colors[1]})`,
        "height":"220px"}}>
        <p className="text-center text-light text-uppercase">{`${a.colors[0]} -> ${a.colors[1]}`}</p>
        </div>)
    }
      </div>
      </div>
      </div>
    );
  }
}
