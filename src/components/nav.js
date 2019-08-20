import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import data from '../data/data.js';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      open: false
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
    this.checkCurrent();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  componentDidUpdate() {
    this.checkCurrent();
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  checkCurrent = () =>{
    var pages = data["pages"];
    var current = pages.indexOf(this.props.active.split('/')[1])+1;
    if(current === 0) current = 1;
    $('nav li.active').removeClass('active');
    $('nav li:nth-child('+current+')').addClass('active');
  }
  togglePanel() {
    if(this.state.open) {
      this.setState({open: false})
      $('main').removeClass('overflow-y-hidden vh-100');
      $('.panel').removeClass('set');
      $('.hamburger').removeClass('is-active');
      $('.panel li').css({"transition-duration": "0"});
    } else {
      this.setState({open: true})
      $('main').addClass('overflow-y-hidden vh-100');
      $('.panel').addClass('set');
      $('.hamburger').addClass('is-active');
      $('.panel li').css({"transition-duration": ".6s"});
    }
  }
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 959;

    var navStyle = {
      maxWidth: 960
    }

    var buttonStyle = {
      transform: "scale(.6)",
      zIndex: 101
    }

    var navList = isMobile ? (
      <button className="hamburger hamburger--squeeze" type="button" style={buttonStyle} onClick={this.togglePanel.bind(this)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

    ) : (
      <ul className="ttu ls2 f12">
        <PageList/>
      </ul>
    )

    var panel = <Panel togglePanel={this.togglePanel.bind(this)} display={this.state.open} mobile={isMobile}/>

    return (
      <nav className="center flex items-center" style={navStyle}>
        <Link to ='/'>
          <div id="logo">
            <img src={logo} width="40" alt="Mark Liang"/>
          </div>
        </Link>
        {navList}
        {panel}
      </nav>
    );
  }
}

export default Nav;

class Panel extends Component {
  render(){
    var panelStyle = {
      display: this.props.mobile ? "block" : "none",
      opacity: this.props.display ? 1 : 0,
      pointerEvents: this.props.display ? "auto" : "none",
      transition: "opacity .2s linear",
      zIndex: 100
    }
    return (
      <div className="panel bg-blue absolute w-100 vh-100 top-0" style={panelStyle}>
        <div className="mt100">
          <div className="mv4 center tc">
            <img src={logo} width="30" alt="Mark Liang"/>
            <ul className="ttu ls2 f14" onClick={this.props.togglePanel}>
              <PageList/>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function PageList(props) {
  let list = [];
  for(var i = 0; i < data["pages"].length; i++) {
    var temp = null;
    if(i === 0) temp = (<li><Link to ='/'>{data["pages"][i]}</Link></li>)
    else temp = (<li><Link to ={'/'+data["pages"][i]}>{data["pages"][i]}</Link></li>)
    list.push(temp);
  }
  return list
}
