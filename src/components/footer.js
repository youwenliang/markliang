import React, { Component } from 'react';

class Footer extends Component {
  render() {
    var footerStyle = {
      height: "64px",
      background: "rgba(123,172,203,.2)",
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
        <p style={footerTextStyle}>© 2019  |  Design & Develop by Mark Liang</p>
      </footer>
    );
  }
}

export default Footer;
