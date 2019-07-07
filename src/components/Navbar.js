import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Auth0Lock from 'auth0-lock';

const clientId='bbSbrUNsXUkiG4JnGfTRrtjsIlLGag6D',
domain='dev-uf0zjuv7.auth0.com';

export default class Navbar extends Component {
  componentWillMount(){
    this.lock=new Auth0Lock(clientId,domain);
    this.lock.on('authenticated',authres=>{
      console.log(authres);
      this.showProfile(authres);
    });
  }
  showProfile(auth){
    this.lock.getUserInfo(auth.accessToken,(err,profile)=>{
      if(err)console.log(err);
      else{
      localStorage.setItem('user',auth.accessToken);
      this.setState({token:localStorage.getItem('user')});
      }
    });
  }
  constructor(props){
    super(props);
    this.state = {
      token:''
    };
    this.logio=this.logio.bind(this);
  }
  logio(){
    if(this.state.token){
    localStorage.removeItem('user');
    this.setState({token:''});
   }
    else
    this.lock.show();
  }
  render(){
    return(
      <nav className="navbar navbar-expand navbar-dark nv shadow rounded">
        <div className="container">
<Link to="/" className="navbar-brand" href="#">
<img src="./images/download.jpg" width="30" height="30" alt="Unavailable"/> TechKeeda
</Link>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
      <button className='btn btn-success nav-link px-4 rounded-pill shadow border' onClick={this.logio}><i className="fa fa-sign-in" aria-hidden="true"></i> {this.state.token?'Logout':'Login'}</button>
      </li>
      <li className='nav-item active mx-3'>
      <Link to="/news" className={this.state.token?'nav-link':'nav-link disabled'}><i className="fa fa-newspaper-o" aria-hidden="true"></i> News</Link>
      </li>
      <li className='nav-item active'>
      <Link to="/dev" className={this.state.token?'nav-link':'nav-link disabled'}><i className="fa fa-desktop" aria-hidden="true"></i> Developer</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>

    );
  }
}
