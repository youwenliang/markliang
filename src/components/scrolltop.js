import React, { Component } from 'react';
import $ from 'jquery';

class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.checkShow);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.checkShow);
  }
  checkShow = () => {
    if($(window).scrollTop() < 150) this.setState({show:false})
    else this.setState({show:true})
  }
  scroll = () => {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
  }

  render() {
    var scrollStyle = {
      position: "fixed",
      right: 0,
      bottom: 0,
      width: "64px",
      height: "64px",
      zIndex: 99,
      color: "white",
      fontSize: "30px",
      display: this.state.show ? "flex" : "none"
    }
    return (
      <div style={scrollStyle} className="bg-blue pointer flex items-center justify-center" onClick={this.scroll}>
        <i className="material-icons">arrow_upward</i>
      </div>
    );
  }
}

export default ScrollTop;
