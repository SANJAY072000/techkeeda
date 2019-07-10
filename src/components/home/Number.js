import React,{Component} from 'react';
import axios from 'axios';

const d=new Date();

export default class Number extends Component {
  componentWillMount(){
    axios({
      url:``,
      headers:{
      }
    })
    .then(res=>this.setState({text:res.data.text,year:res.data.year}))
    .catch(err=>console.log(err));
  }
  constructor(props){
    super(props);
    this.state = {text:'',year:''};
  }
  render(){
    return(
      <div>
        <div className="container mt-5 border-top">
        <section id="section2" className="mt-5 pt-5">
        <div className="row">
        <div className="col-12">
          <h1 className="text-center display-4 mb-4">{`Today is ${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`}</h1>
          <h6 className="text-muted text-center">See some amazing facts about this date !
          </h6>
        </div>
        <div className="w-100 mt-3"></div>
        <div className="col-12">
        <h4 className="lead display-5 text-center mb-3">{`On ${this.state.year},`}</h4>
        <h4 className="lead display-5 text-center">`{this.state.text}`</h4>
        </div>
        </div>
        </section>
        </div>
      </div>
    );
  }
}
