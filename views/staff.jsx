var React = require('react');
var css = require('../styles/staff');

var Staff = React.createClass({
  render() {
    var s = this.props.data;
    return (
      <div className={css.mod.className}>
        <div className={css.contentContainer.className}>
          <div className={css.name.className}>{s.name}</div>
          <a className={css.socialMedia.className} href={`https://twitter.com/${s.twitter}`}>
            <span className={css.twitterIcon.className}>{`@${s.name}`}</span>
          </a>
          <div className={css.title.className}>{s.title}</div>
          <p className={css.bio.className}>{s.bio}</p>
        </div>
        <img className={css.image.className} src={s.image} />
      </div>
    );
  }
});

module.exports = Staff;
