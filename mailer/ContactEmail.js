import React, {Component} from 'react';

var divider = {
  height: '2px',
  background: '#999',
};

var label = {
  color: '#999',
  fontWeight: 'bold',
};

var table ={
  width: '100%',
  borderBottom: '1px solid #eee',
  lineHeight: '135%',
  cellpadding: '0',
  cellspacing: '0',
};

var altRow = {
  backgroundColor: '#f5f5f5',
};

var value = {};

class ContactEmail extends Component {
  render(): ReactElement {
    var {name, email, phone, prayer} = this.props;
    var comments = this.props['whatcha-need'];
    return (
      <div>
        <h1>{name}</h1>
        <strong>RiverCharlotte.com Contact Form</strong>
        <div style={divider}></div>
        <table style={table}>
          <tbody>
            <tr style={altRow}>
              <th style={label}>Name:</th>
              <td style={value}>{name}</td>
            </tr>
            <tr>
              <th style={label}>Email:</th>
              <td style={value}>{email}</td>
            </tr>
            <tr style={altRow}>
              <th style={label}>Phone:</th>
              <td style={value}>{phone}</td>
            </tr>
            <tr>
              <th style={label}>Prayer Request:</th>
              <td style={value}>{prayer}</td>
            </tr>
            <tr style={altRow}>
              <th style={label}>Comments:</th>
              <td style={value}>{comments}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactEmail;

