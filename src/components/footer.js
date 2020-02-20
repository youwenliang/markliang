import React, { Component } from 'react';

class Footer extends Component {
  render() {
    var footerStyle = {
      height: "64px",
      background: "#E1EDF4",
      textAlign: "center"
    }

    var footerTextStyle = {
      fontSize: "12px",
      lineHeight: "64px",
      color: "#30638D",
      margin: 0,
      fontWeight: 700
    }

    return (
      <footer style={footerStyle}>
        <p style={footerTextStyle}>© 2020  |  Design & Develop by Mark Liang</p>
      </footer>
    );
  }
}

export default Footer;
