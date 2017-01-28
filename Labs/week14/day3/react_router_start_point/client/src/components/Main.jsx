import React from 'react';
import About from './About.jsx';
import Home from './Home.jsx';
import Pricing from './Pricing.jsx';
import {Link} from 'react-router';

class Main extends React.Component {
  render(){
    return (
      <div>
        <h4>Cohort 7 website</h4>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/pricing'>Pricing</Link></li>
          </ul>
          {this.props.children}

      </div>
    )
  }
}  

export default Main;
