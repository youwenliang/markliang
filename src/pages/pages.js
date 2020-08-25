import React, { Component } from 'react';
import data from '../data/data.js';
import Footer from '../components/footer.js';
import List from '../components/list.js';
import Zoom from 'react-medium-image-zoom';
import $ from 'jquery';

import project1 from '../images/projects/project-zerda-cover.png';
import project2 from '../images/projects/screenshot-plus-cover.png';
import project3 from '../images/projects/firefox-color-cover.png';
import project4 from '../images/projects/firefox-send-cover.png';
import project5 from '../images/projects/firefox-screenshots-cover.png';
import project6 from '../images/projects/firefoxos-tv-cover.png';

var pcover = [project1, project2, project3, project4, project5, project6];

class Pages extends Component {
  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    this.state = {
      view: params.id
    }
  }
  componentDidMount() {
    
  }
  switchView = (view) => {
    $(document).scrollTop(0);
    this.setState({
      view: view,
    });
  }
  
  render() {
    var title = this.props.match.params.id;
    const viewContainerMapping = {
      'firefox-lite': <Project01 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'screenshot-go': <Project02 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-color': <Project03 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-send': <Project04 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-screenshots': <Project05 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefoxos-tv': <Project06 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />
    }
    let container = viewContainerMapping[this.state.view];
    
    return (
      <section id={title}>
        {container}
      </section>
    );
  }
}

export default Pages;


/************************************************************************************************************************* 



                                                        Views



*************************************************************************************************************************/

class Project01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    return (
      <section id={this.state.id} className="page">
        <div className="box center tc">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <List prev={5} next={1}/>
        <Footer/>
      </section>
    );
  }
}

class Project02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 2,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <List prev={0} next={2}/>
        <Footer/>
      </section>
    );
  }
}

class Project03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 3,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <List prev={1} next={3}/>
        <Footer/>
      </section>
    );
  }
}

class Project04 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 4,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <List prev={2} next={4}/>
        <Footer/>
      </section>
    );
  }
}

class Project05 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 5,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <List prev={3} next={5}/>
        <Footer/>
      </section>
    );
  }
}

class Project06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 6,
      width: window.innerWidth
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
 
  render() {
    var cdata = data["contents"]["projects"];
    var pdata = data["projects"][cdata["main-url"][this.state.num-1]];
    const { width } = this.state;
    const isMobile = width <= 959;

    var projectH1 = {
      fontSize: !isMobile ? "60px":"30px",
      fontWeight: "bold"
    }
    var projectH2 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "30px":"22.5px"
    }
    var homeH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "1px"
    }
    var homeH4 = {
      fontSize: !isMobile ? "18px":"16px",
      lineHeight: !isMobile ? "27px":"24px",
      color: "#222222",
      fontWeight: 500
    }

    return (
      <section id={this.state.id} className="page">
        <div className="box center tc ph4">
          <h1 className="mv0" style={projectH1}>{cdata["main-tag"][this.state.num-1]}</h1>
          <p className="mb5-l mb4 mt3 ph4" style={projectH2}>{cdata["main-title"][this.state.num-1]}</p>
          <div className="overflow-hidden br4-l br0">
            <img src={pcover[this.state.num-1]} width="100%" />
          </div>
        </div>
        <div className="box center ph4 mt5-l mt4 mb100">
          <h5 className="small-title">overview</h5>
          <div className="cf">
            <div className="fl w-50-l w-100 mb4 mb0-l">
              <p className="f4 lh-copy fw4">Firefox OS TV presents a seamless Firefox web experience on a Smart TV platform, collaborating with our community to build an optimized TV experience. It is part of the effort to provide Firefox OS as an open platform choice for managing and controlling the broader range of connected devices available in the physical world. It was one of the most prominent projects running in the Mozilla Taipei office in 2015.</p>
            </div>
            <div className="fl w-50-l w-100 pl4-l mb4 mb0-l">
              <h5 className="mv2" style={homeH5}>Date<br/>—</h5>
              <h4 className="mv2" style={homeH4}>2015</h4><br/>
              <h5 className="mv2" style={homeH5}>Roles<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Prototyper / Front-End Development</h4><br/>
              <h5 className="mv2" style={homeH5}>Skills<br/>—</h5>
              <h4 className="mv2" style={homeH4}>HTML/CSS, Javascript, User Testing</h4>
            </div>
          </div>
          <div className="mt3 mb5-l mb4">
            <a href="https://youwenliang.github.io/people/mliang/Projects/FirefoxOS_TV-Prototype/" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 white">Launch Prototype</a>
          </div>
          <hr className="section-divider"></hr>
          <div className="mt5-l mt4">
            <div>
              <h2 className="f2">The Challenge</h2>
              <p className="f4 lh-copy fw4">This was my first project when I joined Mozilla in 2015, at that time the user interface had already well developed and defined, so the role for me is to continue driving the UX of some new features and help prototype and iterate some ideas with our users. The challenge here is to build on top of an already well-received product and continue to innovate the details. Read more about the user interface design <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS_for_TV/User_interface_animation_design" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0">
              <img
                alt="Wireframes for the ideas about organizing homescreen with folders."
                src="../images/firefoxos-tv/image-0.png"
                width="100%"
              />
              <p className="tc f6 o-60">Wireframes for the ideas about organizing homescreen with folders.</p>
            </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2">Prototyping</h2>
              <p className="f4 lh-copy fw4">Prototyping for Smart TV is a very different experience since we have to control all the interfaces without a mouse. I made a web-based prototype that is solely controlled by keyboard and can be installed on a TV to navigate with a remote control. Users have to perform several tasks with the prototype, including rearranging the apps on the screen, filtering the view to show specific apps, creating a folder, and moving an item into that folder. The goal here is to understand how to create a better way for users to customize and organize their home screen. Here are some of the interactions we created:</p>
          </div>
          <div className="box center ph4">
              <figure className="mt4 mb5-ns mb4 mh0">
                <img
                alt="Rearranging the apps to customize your home screen."
                src="../images/firefoxos-tv/image-1.gif"
                width="100%"
              />
                <p className="tc f12 o-60">Rearranging the apps to customize your home screen.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <img
                alt="Filtering the view to show specific apps."
                src="../images/firefoxos-tv/image-2.gif"
                width="100%"
              />
                <p className="tc f12 o-60">Filtering the view to show specific apps.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <img
                alt="Creating a folder with selected apps."
                src="../images/firefoxos-tv/image-3.gif"
                width="100%"
              />
                <p className="tc f12 o-60">Creating a folder with selected apps.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <img
                alt="Moving an app inside your folder."
                src="../images/firefoxos-tv/image-4.gif"
                width="100%"
              />
                <p className="tc f12 o-60">Moving an app inside your folder.</p>
              </figure>
            </div>
        </div>
        <div className="box center ph4 pv100">
          <div>
            <h2 className="f2">The Results</h2>
            <p className="f4 lh-copy fw4">The bad news is, Mozilla announced that it would no longer be developing the Firefox OS for the smartphone market in December 2015. In consequence, there's also no more Firefox OS for Smart TVs. Since Firefox OS is an open-source project, Panasonic was still able to develop its own "My Home Screen 2.0" based on the old OS. In a way, Firefox OS will continue live on in Panasonic’s 2017 TVs.</p>
          </div>
          <figure className="mt4 mb5-ns mb4 mh0">
              <img
                alt="My Home Screen 2.0"
                src="../images/firefoxos-tv/image-1.png"
                width="100%"
              />
              <p className="tc f6 o-60">Panasonic's "My Home Screen 2.0".</p>
            </figure>
        </div>
        <List prev={4} next={0}/>
        <Footer/>
      </section>
    );
  }
}