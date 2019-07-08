import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Deliver extends Component {
  render(){
    return(
      <div>
      <div className="container mt-5">
      <div className="row">
      <div className="col-12 col-lg-6">
      <Link to="/dev/fonts" className="btn btn-outline-success btn-block">
      See the new font families !
      </Link>
      </div>
      <div className="col-12 col-lg-6">
      <Link to="/dev/grads" className="btn btn-outline-warning btn-block">
      Try our new gradients !
      </Link>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
