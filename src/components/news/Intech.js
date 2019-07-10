import React,{Component} from 'react';
import Lf from '../Lf';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Intech extends Component {
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
    deliver=<Rintech/>
    else deliver=<Lf/>
    return(
      <div>
        {deliver}
      </div>
    );
  }
}

class Rintech extends Component {
  componentWillMount(){
    axios({
      url:'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8efb4d00ecb5445d9c27a0addb9bd51e'
    })
    .then(res=>this.setState({inews:res.data.articles}))
    .catch(err=>console.log(err));
  }
  constructor(props){
    super(props);
    this.state = {
      inews:[]
    };
  }
  render(){
    return(
      <div>
        <div className="container mt-5">
          <aside id="aside3">
            <div className="row">
              <div className="col-12">
                <h1 className="display-4 text-center lead my-4 animated swing delay-1s">
                Tech Headlines !
              </h1>
              <div className="d-flex justify-content-center mt-5">
              <Link to="/intech" className="btn btn-outline-success">Technology</Link>
              <Link to="/inent" className="btn btn-outline-danger mx-5">Entertainment</Link>
              <Link to="/insp" className="btn btn-outline-warning">Sports</Link>
              </div>
              </div>
            </div>
              <div className="row mt-5">
                {this.state.inews.map((a,i)=>
                <div className="border-top mt-5" key={i}>
                <div className="col-12">
                  <h4 className="asd display-5 my-5">{a.title}</h4>
                </div>
              <div className="col-12">
                <img src={`${a.urlToImage}`} alt="Unavailable" style={{"width":"500px","height":"300px"}}
                className="img-fluid rounded mx-auto d-block"/>
              </div>
              <div className="col-12">
                <h4 className="text-center display-5 lead mt-5">{a.description}</h4>
              </div>
              <div className="col-12">
                <a href={`${a.url}`} target="_blank" rel="noopener noreferrer" className="text-center display-5 lead my-4 font-weight-bold">See More -></a>
              </div>
              </div>
              )}
              </div>
          </aside>
        </div>
      </div>
    );
  }
}
