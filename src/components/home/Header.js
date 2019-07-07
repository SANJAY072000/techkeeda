import React,{Component} from 'react';

export default class Header extends Component {
  render(){
    return(
      <div>
      <div className="container mt-5">
        <header>
      <div className="row">
        <div className="col-lg col-12">
          <img src="./images/download.jpg" className="mt-3 animated infinite tada a img-fluid mx-auto d-block rounded-circle" alt="Unavailable"/>
          <h1 className="display-2 text-center mt-4">TechKeeda</h1>
          <h3 className="display-5 text-center lead mb-5">
            Final stop of all News Enthusiasts <br/>
          Here you can get updated with news of different countries in their languages.
          Frontend Developers can find different colors and font faces of their choice.
          <br/>
          <br/>
        <span className="text-info">Scroll Down to learn more !
          </span>
          </h3>
        </div>
        <div className="col-lg col-12">
          <div className="device-wrapper stph" style={{"marginLeft":"110px"}}>
  <div className="device" data-device="iPhoneSE" data-orientation="portrait" data-color="gold">
    <div className="screen">
    <img src="./images/download.jpg" alt="Unavailable" className="img-fluid" style={{"height":"100%","width":"100%"}}/>
    </div>
  </div>
</div>
</div>
</div>
</header>

      </div>
      </div>
    );
  }
}
