import React from 'react';
import './App.css';
import * as youtubesearch from 'youtube-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const GOOGLE_KEY = 'AIzaSyChXhC5kDM0REDhHsmtfaMUN42InsrflcU'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      term: '있지',
      videos : [],
      selectedVideo: null
    }

  }
  componentDidMount(){
    this.search(this.state.term);
  }

  search(term){
    this.setState({term: term});
    youtubesearch(term, {key: GOOGLE_KEY}, (err, results) => {
      if(err) return console.log(err);
      console.log(results);
      this.setState({
        videos: results,
        selectedVideo: results[0]
      });

    });
  }
  
  render() {
    return (
      <div className="App container mt-3">
        <SearchBar term={this.state.term} onChange = {
        (term) => this.search(term)}/>
        <div className="row">
          <div className="col-8">
            <VideoDetail video={this.state.selectedVideo}/>
          </div>
          <div className="col-4">
            <VideoList videos={this.state.videos}
            onItemSelect = {(video) => {
              this.setState({selectedVideo: video});
            }}/>
          </div>
        </div>
      </div>
    );
  }
    
}

export default App;
