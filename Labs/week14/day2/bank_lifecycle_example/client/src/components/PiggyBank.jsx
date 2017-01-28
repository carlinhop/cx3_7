var React = require('react');

var PiggyBank = React.createClass({
  componentWillMount: function() {
    //No access to dom. Component is about to be mounted. think of this like a constructor.
    console.log("componentWillMount");
  },
  componentDidMount: function() {
    //Component was mounted meaning its rendered to dom. Here we can mess with the dom if need be, like if we wanted to draw on a html canvas. 
    console.log("componentDidMount")
  },
  componentWillUpdate: function() {
    //Component is abount to update. Dont access dom as its about to be changed.
    console.log("componentWillUpdate");
  },
  componentWillUnmount: function() {
    //Component to be unmounted. This means this class will be destroyed. Can handle cleanup of logic, log it etc.
    console.log("componentWillUnmount");
  },
  componentWillReceiveProps(oldProps, newProps) {
    //Component props is about to be updated
    console.log("componentWillReceiveProps");
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    //Should it update? Here we can tell react whether to call render
    console.log("shouldComponentUpdate")
    return true;
  },
  componentDidUpdate: function(prevProps, prevState) {
    //Component updated, if you wanted to touch dom do it here and make any changes neccessary.
    console.log("componentDidUpdate");
  },
  propTypes: {
    total: React.PropTypes.number.isRequired,
    addToSavings: React.PropTypes.func.isRequired,
    deductFromSavings: React.PropTypes.func.isRequired,
    keepPropsSame: React.PropTypes.func.isRequired,
    unMount: React.PropTypes.func.isRequired,
    title: React.PropTypes.string.isRequired
  },
  render: function(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>Total savings: {this.props.total}</p>
        <button onClick={this.props.addToSavings}>Deposit Change!</button>
        <button onClick={this.props.deductFromSavings}>Widthdraw Change!</button>
        <button onClick={this.props.keepPropsSame}>Keep state same</button>
        <button onClick={this.props.unMount}> Unmount </button>
      </div>
      );
  }
});

module.exports = PiggyBank;