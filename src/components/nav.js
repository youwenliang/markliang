import React, { Component } from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import data from '../data/data.js';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 959 ? true : false,
      open: false
    }
    this.checkMobile = this.checkMobile.bind(this);
    this.checkCurrent = this.checkCurrent.bind(this);
  }
  componentDidMount() {
    var $this = this;
    window.addEventListener('resize', $this.checkMobile, false);
    $this.checkCurrent();
  }
  componentDidUpdate() {
    var $this = this;
    $this.checkCurrent();
  }
  componentWillUnmount(){
    var $this = this;
    window.removeEventListener('resize', $this.checkMobile, false);
  }
  checkMobile() {
    var $this = this;
    if($(window).width() <= 959) $this.setState({mobile:true});
    else $this.setState({mobile:false});
  }
  checkCurrent(){
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
    var navStyle = {
      maxWidth: 960
    }

    var navList = this.state.mobile ? (
      <div className="pa3 dark-gray pointer">
        <i class="material-icons md-24" onClick={this.openPanel.bind(this)}>menu</i>
      </div>
    ) : (
      <ul className="ttu ls2 f12">
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ={'/'+data["pages"][1]}>{data["pages"][1]}</Link></li>
        <li><Link to ={'/'+data["pages"][2]}>{data["pages"][2]}</Link></li>
        <li><Link to ={'/'+data["pages"][3]}>{data["pages"][3]}</Link></li>
        <li><Link to ={'/'+data["pages"][4]}>{data["pages"][4]}</Link></li>
        <li><Link to ={'/'+data["pages"][5]}>{data["pages"][5]}</Link></li>
      </ul>
    )

    var panel = <Panel closePanel={this.closePanel.bind(this)} display={this.state.open} mobile={this.state.mobile}/>

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
            <i class="material-icons md-24" onClick={this.props.closePanel}>close</i>
          </div>
        </div>
        <div className="mv4 center tc">
          <img src={logo} width="30" alt="Mark Liang"/>
          <ul className="ttu ls2 f14" onClick={this.props.closePanel}>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ={'/'+data["pages"][1]}>{data["pages"][1]}</Link></li>
            <li><Link to ={'/'+data["pages"][2]}>{data["pages"][2]}</Link></li>
            <li><Link to ={'/'+data["pages"][3]}>{data["pages"][3]}</Link></li>
            <li><Link to ={'/'+data["pages"][4]}>{data["pages"][4]}</Link></li>
            <li><Link to ={'/'+data["pages"][5]}>{data["pages"][5]}</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
