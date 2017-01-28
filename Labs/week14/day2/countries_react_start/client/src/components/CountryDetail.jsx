var React = require('react');

var CountryDetail = function (props) {
  if(!props.country){
    return (<h4>No country selected</h4>);
  }
  return (
    <h3>
      {props.country.name}
      <p>Population: {props.country.population}</p>
    </h3>
  );
};

module.exports = CountryDetail;
