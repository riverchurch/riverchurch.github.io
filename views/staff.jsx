var React = require('react');
var css = require('../styles/staff');

var Staff = React.createClass({
  render() {
    var s = this.props.data;
    return (
      <div className={css.mod.className}>
        <a
          href={`https://twitter.com/${s.twitter}`}
          className={css.contentContainer.className}>
          <div className={css.name.className}>{s.name}</div>
          <div className={css.title.className}>{s.title}</div>
          <p className={css.bio.className}>{s.bio}</p>
        </a>
        <img className={css.image.className} src={s.image} />
      </div>
    );
  }
});

module.exports = Staff;
