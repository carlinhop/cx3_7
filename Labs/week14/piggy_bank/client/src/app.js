var React = require('react');
var ReactDOM = require('react-dom');

var PiggyBank = require('./components/PiggyBank.jsx');

window.onload = function(){
  ReactDOM.render(
    < PiggyBank title= "Beth's piggy bank" colour= "red" owner="Beth" deposit={200}/>,
    document.getElementById('app')
  );
}
