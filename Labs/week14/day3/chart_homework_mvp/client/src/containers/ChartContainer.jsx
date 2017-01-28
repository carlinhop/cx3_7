import React from 'react';
import  Chart from '../components/Chart.jsx';

class ChartContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {songs: []};
  }

  loadSongs(url){
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if(request.status == 200){
        const jsonString = request.responseText;
        const songsList = JSON.parse(jsonString);
        this.setState({songs: songsList.feed.entry});
      }
    };
    request.send();
  }

  componentDidMount(){
    this.loadSongs(this.props.url);
  }

  render(){
    if(!this.state.songs.length){
      return <p>Loading..</p>
    }

    return (<Chart songs = {this.state.songs}/>)
  }
}





export default ChartContainer;
