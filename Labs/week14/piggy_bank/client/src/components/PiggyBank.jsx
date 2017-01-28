var React = require('react');


var PiggyBank = React.createClass({

  getInitialState: function(){
    return {total: this.props.deposit}
  },
  propTypes: {
    title: React.PropTypes.string.isRequired,
    colour: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    deposit: React.PropTypes.number.isRequired
  },
  addToSavings: function(){
    this.setState({
      total: this.state.total + 1
    })
  },
  subtractToSavings: function(){
    this.setState({
      total: this.state.total - 1
    })
  },
  newDeposit: function(){
    var money = Number(document.getElementById("new-deposit").value)
    this.setState({
      total: money? (Number(this.state.total) + money) : this.state.total
    })
  },
  
  render: function(){
    return (
      <div className ="bank-box">
       <h1> {this.props.title} {this.props.colour} </h1>  
       <p>Total savings: {this.state.total} </p>
       <p>Owner: {this.props.owner} </p>
       <button onClick={this.addToSavings}>Deposit change!</button>
       <button onClick={this.subtractToSavings}>Decrease!</button>
       <input onChange={this.newDeposit} id="new-deposit"/>
      </div>
    )
  }

});

module.exports = PiggyBank;