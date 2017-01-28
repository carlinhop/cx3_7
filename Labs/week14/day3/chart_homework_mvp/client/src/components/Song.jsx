import React from 'react';

const Song = function ({image, position, title, artist}) {
  
  const templateString = `${position}.${title}`;

  return (
    <div>
      <img src={image}/>
      <div className='details'>
        <h3>{templateString}</h3>
        <h4>{artist}</h4>
     </div>
    </div>
  );
};

export default Song;
