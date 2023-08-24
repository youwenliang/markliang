import React, { Component } from 'react';

class Footer extends Component {
  render() {
    var footerStyle = this.props.bottom ? {
      height: "64px",
      background: "#E1EDF4",
      textAlign: "center",
      bottom: 0
    } : {
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
    var b = this.props.bottom ? "bottom":""; 

    return (
      <footer style={footerStyle} className={b}>
        <p style={footerTextStyle}>© 2023  |  Design & Develop by Mark Liang</p>
      </footer>
    );
  }
}

export default Footer;
