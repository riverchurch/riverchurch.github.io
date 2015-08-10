/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component, PropTypes} from 'react';

var getLabelSelector = v => v ? styles.label__hasContent : styles.label;

class Floater extends Component {
  constructor(props: mixed, context: mixed): void {
    super(props, context);

    this.state = {value: this.props.initialValue};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: mixed): void {
    var {value} = event.target;
    this.setState({value});

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event);
    }
  }

  componentDidMount(): void {
    // in case the browser saved state on a refresh
    var {value} = this.refs.input;
    if (value !== this.state.value) {
      this.setState({value});
    }
  }

  render(): ReactElement {
    var {label, id, ...rest} = this.props;
    if (typeof id === 'undefined') id = label.replace(/\s+/, '-');
    var {value} = this.state;

    return (
      <div className={styles.fieldset}>
        <label
          className={getLabelSelector(value)}
          htmlFor={id}>{label}</label>
        <this.props.input
          ref="input"
          {...rest}
          onChange={this.handleChange}
          className={styles.textfield}
          name={id}
          id={id}
          placeholder={label}
          value={value} />
      </div>
    );
  }
}

Floater.propTypes = {
  input: PropTypes.string.isRequired,
};

Floater.defaultProps = {
  input: 'input',
};

export default Floater;
