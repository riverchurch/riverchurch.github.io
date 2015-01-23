var React = require('react');
var sunday = require('../styles/sunday');
var section = require('../styles/section');

var SundayMorning = React.createClass({
  render() {
    var {title, description} = this.props;
    return (
      <section id="sunday-morning">
        <div className={sunday.image.className}>
          <p className={sunday.quote.className}>a place to belong and become like Jesus</p>
        </div>
        <div className={sunday.content.className}>
          <h2 className={sunday.header.className}>Sunday Mornings</h2>
          <div className={sunday.section.className}>
            <em className={section.sectionName.className}>current series</em>
            <strong className={section.sectionTitle.className}>{title}<br /></strong>
            <p className={sunday.p.className}>{description}</p>
          </div>
          <div className={sunday.section.className}>
            <span className={section.sectionName.className}>listen to our podcast</span>
            <p>
              <a className={sunday.podcastAnchor.className} href="https://soundcloud.com/rivercharlotte/">
                <img src="/public/images/icon-soundcloud.svg" width="40px" alt="soundcloud" />
              </a>
              <a className={sunday.podcastAnchor.className} href="https://itunes.apple.com/us/podcast/river-church-charlotte-podcast/id559791603?mt=2">
                <img src="/public/images/icon-itunes.svg" width="40px" alt="iTunes" />
              </a>
            </p>
          </div>
          <div className={sunday.lastSection.className}>
            <span className={section.sectionName.className}>music</span>
            <strong className={section.sectionTitle.className}>river church live</strong>
            <p className={sunday.p.className}>Listen to our live worship album <a href="http://www.deepwaterworship.com" className={sunday.oneHopeAnchor.className}>One Hope</a>.</p>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = SundayMorning;
