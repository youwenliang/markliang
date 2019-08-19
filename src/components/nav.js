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
  closePanel() {
    this.setState({open: false})
    $('body').removeClass('overflow-y-hidden');
    $('.panel').removeClass('set');
  }
  openPanel() {
    this.setState({open: true})
    $('body').addClass('overflow-y-hidden');
    $('.panel').addClass('set');
  }
  
  render() {
    const { width } = this.state;
    const isMobile = width <= 959;

    var navStyle = {
      maxWidth: 960
    }

    var navList = isMobile ? (
      <div className="pa3 dark-gray pointer">
        <i className="material-icons md-24" onClick={this.openPanel.bind(this)}>menu</i>
      </div>
    ) : (
      <ul className="ttu ls2 f12">
        <PageList/>
      </ul>
    )

    var panel = <Panel closePanel={this.closePanel.bind(this)} display={this.state.open} mobile={isMobile}/>

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
      <div className="panel bg-blue absolute w-100 h-100 top-0" style={panelStyle}>
        <div style={{height: "64px"}} className="flex items-center">
          <div className="pa3 white pointer absolute right-0 dib">
            <i className="material-icons md-24" onClick={this.props.closePanel}>close</i>
          </div>
        </div>
        <div className="mv4 center tc">
          <img src={logo} width="30" alt="Mark Liang"/>
          <ul className="ttu ls2 f14" onClick={this.props.closePanel}>
            <PageList/>
          </ul>
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
