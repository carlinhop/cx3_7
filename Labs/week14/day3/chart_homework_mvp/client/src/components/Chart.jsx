var React = require('react');
var Song = require('./Song.jsx').default;

const Chart = function ({songs}) {
  if(songs == null || songs.length === 0) {
    return <p>Loading...</p>
  }
  return (
    <div>
    <h2>UK Top 20 Songs</h2>
    {songs.map(function (song, index) {
      return ( 
        <Song 
          key={index} 
          position={index + 1} 
          title={song['im:name'].label} 
          artist={song['im:artist'].label}
          image={song['im:image'][1].label}
        />
      );
    })}
    </div>
  );
};

export default Chart;
