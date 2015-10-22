/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component, PropTypes} from 'react';

class Staff extends Component {
  render(): ReactElement {
    var {data} = this.props;

    return (
      <section id="staff" className={styles.section}>
        {data.map(s => (
          <div key={s.name} className={styles.block}>
            <a
              href={`https://twitter.com/${s.twitter}`}
              className={styles.content}>
              <div className={styles.name}>{s.name}</div>
              <div className={styles.title}>{s.title}</div>
              <p className={styles.bio}>{s.bio}</p>
            </a>
            <img className={styles.image} src={s.image} />
          </div>
        ))}
      </section>
    );
  }
}

Staff.propTypes = {
  data: PropTypes.any.isRequired,
};

Staff.defaultProps = {
  data: [
    { name: 'Derek Turner',
      title: 'Lead Pastor',
      twitter: 'PastorDerekT',
      bio: 'Derek is the pastors kid that swore he’d never be a pastor. Then he bumped into the amazing grace of Jesus! He’s smitten by his wife Sarah and two daughters, Caroline and Kate. He’s a graduate of ORU where he broke lots of bones playing varsity soccer.',
      image: '/public/images/bio-derek.jpg',
    },
    { name: 'Sarah Turner',
      title: 'Team Pastor',
      twitter: 'sarahjoyturner',
      blog: 'http://www.sleepingwiththepastor.com/',
      bio: 'Sarah is one of six kids and extremely proud of her Tennessee roots. She has a passion for women to know their true identity and value. She adores her husband and two sweet girls. She stands in amazement of God’s grace.',
      image: '/public/images/bio-sarah.jpg',
    },
    { name: 'Grayson Berkowitz',
      title: 'Worship Pastor',
      twitter: 'berzerkowitz',
      bio: 'A North Carolina native, Grayson grew up writing and playing music. He and his wife Tori have two kids, Aliza and Ari. Grayson lives to inspire others to live a life of worship.',
      image: '/public/images/bio-grayson.jpg',
    },
    { name: 'Tori Berkowitz',
      title: 'Children’s Pastor',
      twitter: 'toriberkowitz',
      bio: 'Born in Ft Worth TX, moved to NC. Married Grayson, has two beautiful kids. Tori leads with strength and boldness and is multitalented. She has a heart for people to deeply know their Heavenly Father.',
      image: '/public/images/bio-tori.jpg',
    },
  ],
};

export default Staff;

