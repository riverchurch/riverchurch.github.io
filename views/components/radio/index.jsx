var React = require('react');
var css = require('./styles');

var TEXT_CLASSNAME = 'text';
var INNER_CLASSNAME = 'radioInner';
var className = (c, _) => _ ? `${c}Active` : c;
var getTextClassname = className.bind(null, TEXT_CLASSNAME);
var getInnerClassname = className.bind(null, INNER_CLASSNAME);

var Radio = React.createClass({
  componentDidMount() {
    /*
    // in case the browser saved state on a refresh
    var domChecked = this.refs.input.getDOMNode().checked;
    if (domChecked !== this.state.checked) {
      this.props.onChange ({checked: domChecked});
    }
    */
  },

  render() {
    var {id, name, children, checked, onChange, ...rest} = this.props;
    if (typeof id === 'undefined') id = label.replace(/\s+/, '-');

    return (
      <label
        className={css.label.className}
        htmlFor={id}>
        <div className={css.radioOuter.className}>
          <input
            type="radio"
            ref="input"
            {...rest}
            onChange={onChange}
            className={css.input.className}
            name={name}
            id={id}
            checked={checked} />
          <div className={css[getInnerClassname(checked)].className}></div>
        </div>
        <span className={css[getTextClassname(checked)].className}>{this.props.children}</span>
      </label>
    );
  }
});

module.exports = Radio;

