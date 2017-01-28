var React = require('react');
var CommentForm = require('./CommentForm');
var CommentList = require('./CommentList');

var sampleData = [
  {id: 1, author: "Craig", text: "Bears shoud know baseball"},
  {id: 2, author: "Cohort 7", text: "Same as everyone else"},

];

var CommentBox = React.createClass({
  getInitialState: function(){
    return {data: sampleData}
  },
  render: function(){
    return (
      <div  className='comment-box'>
        <h2>Add a comment!</h2>
        <CommentForm onCommentSubmit= {this.handleCommentSubmit}/>
        <CommentList  comments={this.state.data}/>
      </div>
    );
  },
  handleCommentSubmit: function(comment){
    comment.id =Date.now();
    var updatedComments = this.state.data.concat([comment]);
    this.setState({data: updatedComments})
  }

});

module.exports = CommentBox;