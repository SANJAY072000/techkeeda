import React,{Component} from 'react';

export default class Fun extends Component {
  render(){
    return(
      <div>
      <div className="container mt-5 border-top">
        <aside className="mt-5 pt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center display-4 mb-4">Developers Zone</h1>
              <h6 className="text-muted text-center">FrontEnd Devs can find different gradients and font families here !</h6>
            </div>
            <div className="w-100 my-4"></div>
            <div className="col-lg-6">
                <div className="device-wrapper" style={{"marginLeft":"80px"}}>
        <div className="device" data-device="Chromebook" data-orientation="portrait" data-color="black">
          <div className="screen">
          <img src="./images/uig.jpg" alt="Unavailable" className="img-fluid" style={{"height":"100%","width":"100%"}}/>
          </div>
        </div>
      </div>
      </div>
            <div className="col-lg-6">
            <h3 className="display-5 lead mt-5 pt-3 text-center">Developers can find here wide variety of gradients for their upcoming projects.</h3>
            </div>
            <div className="w-100 my-4"></div>
            <div className="col-lg-6">
            <h3 className="display-5 lead my-5 text-center">A curated collection of some of the best fonts for the developers.</h3>
            </div>
            <div className="col-lg-6">
              <div className="device-wrapper" style={{"marginLeft":"80px"}}>
      <div className="device" data-device="Chromebook" data-orientation="portrait" data-color="black">
        <div className="screen">
        <img src="./images/gf.png" alt="Unavailable" className="img-fluid" style={{"height":"100%","width":"100%"}}/>
        </div>
      </div>
    </div>
            </div>
          </div>
        </aside>
      </div>
      </div>
    );
  }
}
