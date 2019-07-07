import React,{Component} from 'react';

export default class Section extends Component {
  render(){
    return(
      <div>
      <div className="container mt-5 border-top">
        <section className="mt-5 pt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center display-4 mb-4">News Portal</h1>
              <h6 className="text-muted text-center">Always get updated with news from trustable sources !</h6>
            </div>
            <div className="w-100 my-3"></div>
            <div className="col-lg col-12">
              <div className="card border-0 p-3">
    <i className="fa fa-wrench text-center" aria-hidden="true"></i>
   <div className="card-body text-center">
     <h5 className="card-title py-2">Daily Updated</h5>
     <p className="card-text">News about different sections gets updated on a regular basis to make you ahead of everyone.</p>
   </div>
 </div>
            </div>
            <div className="col-lg col-12">
              <div className="col-lg col-12">
                <div className="card border-0 p-3">
      <i className="fa fa-podcast text-center" aria-hidden="true"></i>
     <div className="card-body text-center">
       <h5 className="card-title py-2">Trustworthy Sources</h5>
       <p className="card-text">Fake news is a nightmare today, we care so that you do not get into trap of fake news.</p>
     </div>
   </div>
              </div>
            </div>
            <div className="col-lg col-12">
              <div className="col-lg col-12">
                <div className="card border-0 p-3">
      <i className="fa fa-line-chart text-center" aria-hidden="true"></i>
     <div className="card-body text-center">
       <h5 className="card-title py-2">Bitcoin Articles</h5>
       <p className="card-text">Bitcoin related articles makes you aware about the current market trends and its analysis.</p>
     </div>
   </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    );
  }
}
