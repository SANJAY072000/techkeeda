import React,{Component} from 'react';
import axios from 'axios';

const API = 'AIzaSyDWdlBN5khxtXVQ0_CWKwuSzCLwh0fLbZA';
const channelID = 'UCByH7Leys13JzxVAkGZIZPA';

export default class YouTube extends Component {
  componentWillMount(){
    axios({
      url:this.state.finalURL
    })
    .then(res=>this.setState({videos:res.data.items}))
    .catch(err=>console.log(err));
  }
  constructor(props){
    super(props);
    this.state = {
      finalURL:`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=3`,
      videos:[]
    };
  }
  render(){
    return(
      <div>
      <div className="container mt-5 border-top">
      <section id="section3" className="mt-5 pt-5">
      <div className="row">
      <div className="col-12">
        <h1 className="text-center display-4 mb-4">Pubg Fan !</h1>
        <h6 className="text-muted text-center">Always get updated with videos from our youtube channel !</h6>
      </div>
      <div className="w-100 my-3"></div>
      <div className="col-12 mx-auto">
      {this.state.videos.map(a=><iframe width="560" height="315" key={a.id.videoId}
      src={`https://www.youtube.com/embed/${a.id.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="vids mt-5">
      </iframe>)}

      </div>
      </div>
      </section>
      </div>
      </div>
    );
  }
}
