var React = require('react');

var ContactForm = React.createClass({
  render() {
    return (
      <form action="/contact" method="post">
        <div className="fieldset">
          <label htmlFor="name">name</label>
          <input name="name" id="name" placeholder="name" />
        </div>
        <div className="fieldset">
          <label htmlFor="email">email</label>
          <input name="email" id="email" placeholder="email" />
        </div>
        <div className="fieldset">
          <label htmlFor="phone">phone number</label>
          <input name="phone" id="phone" placeholder="phone number" />
        </div>
        <div className="fieldset">
          <label htmlFor="life-status">life status</label>
          <input name="life-status" id="life-status" placeholder="life status" />
        </div>
        <div className="fieldset">
          <label htmlFor="prayer">prayer requests?</label>
          <textarea rows="5" name="prayer" id="prayer" placeholder="prayer requests?" />
        </div>
        <div className="fieldset">
          <label htmlFor="whatcha-need">how can we best serve you?</label>
          <textarea rows="5" name="whatcha-need" id="whatcha-need" placeholder="how can we best serve you?" />
        </div>
        <button type="submit">send</button>
      </form>
    );
  }
});

module.exports = ContactForm;
