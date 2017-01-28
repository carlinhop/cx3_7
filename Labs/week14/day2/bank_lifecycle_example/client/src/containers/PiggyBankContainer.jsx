var React = require('react');
var PiggyBank = require('../components/PiggyBank.jsx')

var PiggyBankContainer = React.createClass({
  componentWillMount: function() {
    //No access to dom. Component is about to be mounted. think of this like a constructor.
  },
  componentDidMount: function() {
    //Component was mounted meaning its rendered to dom. Here we can mess with the dom if need be, like if we wanted to draw on a html canvas. 
  },
  getInitialState: function() {
    return {
      total: 0,
      unMount: false
    };
  },
  componentWillUpdate: function() {
    //Component is abount to update. Dont access dom as its about to be changed.
  },
  componentWillReceiveProps(oldProps, newProps) {
    //Component props is about to be updated
  },
  shouldComponentUpdate: function(nextProps, nextState) {
    //Should it update? Here we can tell react whether to call render
    return true;
  },
  componentDidUpdate: function() {
    //Component updated, if you wanted to touch dom do it here and make any changes neccessary.
  },
  addToSavings: function() {
    this.setState({total: this.state.total+this.props.depositAmount});
  },
  deductFromSavings: function() {
    this.setState({total: this.state.total-this.props.depositAmount});
  },
  keepStateSame: function() {
    this.setState({total: this.state.total});
  },
  unMountChild: function() {
    this.setState({unMount: true});
  },
  propTypes: {
    title: React.PropTypes.string.isRequired,
    owner: React.PropTypes.string.isRequired,
    depositAmount: React.PropTypes.number.isRequired
  },
  render: function(){
    var element;

    if(this.state.unMount) {
      element = <div></div>
    }else {
      element = 
      <div className="bank-box">
          <PiggyBank 
            addToSavings={this.addToSavings}
            deductFromSavings={this.deductFromSavings} 
            keepPropsSame={this.keepStateSame}
            unMount={this.unMountChild}
            total={this.state.total}
            title={this.props.owner + ' ' + this.props.title}
             />
        </div>
    }

    return (element);
  }
});

module.exports = PiggyBankContainer;