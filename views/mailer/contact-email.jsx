var React = require('react');
var divider = {
  height: '2px',
  background: '#999',
};

var label = {
  color: '#999',
  fontWeight: 'bold',
};

var ContactEmail = React.createClass({
  render() {
    var {name, email, phone, prayer} = this.props;
    var lifeStatus = this.props['life-status'];
    var comments = this.props['whatcha-need'];
    return (
      <div>
        <h1>{name}</h1>
        <strong>RiverChurchCharlotte.com Contact Form</strong>
        <div style={divider}></div>
        <div>
          <span style={label}>Name: </span>
          <strong>{name}</strong>
        </div>
        <div>
          <span style={label}>Email: </span>
          <strong>{email}</strong>
        </div>
        <div>
          <span style={label}>Life Status: </span>
          <strong>{lifeStatus}</strong>
        </div>
        <div>
          <span style={label}>Prayer Request: </span>
          <strong>{prayer}</strong>
        </div>
        <div>
          <span style={label}>Comments: </span>
          <strong>{comments}</strong>
        </div>
      </div>
    );
  }
});

module.exports = ContactEmail;
