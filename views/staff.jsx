var React = require('react');
var Staff = React.createClass({
  render() {
    var s = this.props.data;
    return (
      <div className="staff">
        <div className="staff__name">{s.name}</div>
        <a href={`https://twitter.com/${s.twitter}`}>{`@${s.name}`}</a>
        <div className="staff__title">{s.title}</div>
        <p className="staff__bio">{s.bio}</p>
        <img src={s.image} />
      </div>
    );
  }
});

module.exports = Staff;
