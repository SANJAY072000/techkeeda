import React,{Component} from 'react';
import Lf from '../Lf';
import axios from 'axios';

export default class Font extends Component {
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
    deliver=<Rfont/>
    else deliver=<Lf/>
    return(
      <div>
        {deliver}
      </div>
    );
  }
}

class Rfont extends Component {
  componentDidMount(){
    axios({
      url:'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDWdlBN5khxtXVQ0_CWKwuSzCLwh0fLbZA'
    })
    .then(res=>this.setState({family:res.data.items}))
    .catch(err=>console.log(err));
  }
  constructor(props){
    super(props);
    this.state = {
      family:[],
      url:''
    };
    this.onClick=this.onClick.bind(this);
  }
  onClick(e){
    let i=e.target.name.indexOf(' ');
    if(i!==-1)
    this.setState({url:`<link href="https://fonts.googleapis.com/
      css?family=${this.replaceAt(e.target.name,i,'+')}&display=swap" rel="stylesheet">`});
      else this.setState({url:`<link href="https://fonts.googleapis.com/
        css?family=${e.target.name}&display=swap" rel="stylesheet">`});
  }
  replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1);
}
  render(){
let link=this.state.url,
cnt='Paste the above snippet in your index.html file';
    return(
      <div className="container mt-5">
      <section id="aside2">
      <div className="row">
        <div className="col-12">
          <h1 className="display-5 text-center lead">
          <span className="mr-5">Eg. -> </span>{link}
          </h1>
          <p className="mt-5 text-center text-muted">
          {cnt}
          </p>
        </div>
        <div className="w-100 mt-5"></div>
        {this.state.family.map((a,i)=>
        <div key={i} className="col-12 col-md-4 mt-5">
          <div className="card mt-5 mt-md-0">
      <div className="card-body">
        <h5 className="card-title" style={{"fontFamily":`${a.family}`}}>{a.family}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Download font file below</h6>
        <a href={`${a.files.regular}`} className="card-text">{a.files.regular}</a>
      </div>
      <div className="card-footer">
     <button className="btn btn-danger btn-sm" onClick={this.onClick} name={a.family}>
     {`Add ${a.family} !`}</button>
   </div>
    </div>
  </div>)
}
      </div>
      </section>
      </div>
    );
  }
}
