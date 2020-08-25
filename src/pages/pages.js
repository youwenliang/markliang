import React, { Component } from 'react';
import data from '../data/data.js';
import Footer from '../components/footer.js';
import List from '../components/list.js';
import Zoom from 'react-medium-image-zoom';
import ImageBox from '../components/lightbox.js';
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

    if($("#addedScript") !== undefined) {
      $("#addedScript").remove();
    } 
    const script = document.createElement("script");
    script.setAttribute('id', 'addedScript');
    script.src = "https://production-assets.codepen.io/assets/embed/ei.js";
    script.async = true;
    document.body.appendChild(script);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  onClick = (n) => {
    this.child.openLightboxOnSlide(n+1);
  };
 
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

    var images = ["../images/firefox-screenshots/image-1.png",
                  "../images/firefox-screenshots/image-0.png",
                  "../images/firefox-screenshots/image-2.png",
                  "../images/firefox-screenshots/image-4.png",
                  "../images/firefox-screenshots/image-8.gif",
                  "../images/firefox-screenshots/image-7.gif",
                  "../images/firefox-screenshots/image-6.png",
                  "../images/firefox-screenshots/image-5.png",
                  "../images/firefox-screenshots/image-3.png"
                  ]

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
              <p className="f4 lh-copy fw4">Firefox Screenshots is one of the Firefox experiments created by the Test Pilot team. It is a smart screenshotting tool built right inside Firefox, letting users capture elements on a webpage easily, or even take shots of a full webpage. The images are collected in your own online library, ready to be shared.</p>
            </div>
            <div className="fl w-50-l w-100 pl4-l mb4 mb0-l">
              <h5 className="mv2" style={homeH5}>Date<br/>—</h5>
              <h4 className="mv2" style={homeH4}>2016-2017</h4><br/>
              <h5 className="mv2" style={homeH5}>Roles<br/>—</h5>
              <h4 className="mv2" style={homeH4}>UX Designer/Engineer</h4><br/>
              <h5 className="mv2" style={homeH5}>Skills<br/>—</h5>
              <h4 className="mv2" style={homeH4}>Sketch, InVision, HTML/CSS, Javascript</h4>
            </div>
          </div>
          <div className="mt3 mb5-l mb4">
            <a href="https://screenshots.firefox.com/" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 white">Launch Website</a>
          </div>
          <hr className="section-divider"></hr>
          <div className="mt5-l mt4">
            <div>
              <h2 className="f2 mb5">The Challenge</h2>
              <p className="f4 lh-copy fw4">In 2016, I joined the Test Pilot team as one of the UX designers to drive the UX and UI design for several experiments. At that time Firefox Screenshots is called Page Shot, and it has already got a lot of active participants using screenshots in their daily workflow. The challenge here is to provide a better onboarding experience, refine some of the user flows, and apply a new design system to the interfaces.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(0)}>
              <img
                alt="The original Page Shot interface."
                src={images[0]}
                width="100%"
              />
              <p className="tc f6 o-60">The original Page Shot interface.</p>
            </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2 mb5">Design Process</h2>
              <p className="f4 lh-copy fw4">To prioritize the works, we started by re-evaluating how people thought of the features in Page Shot. Over a workshop, we learned that people perceive the click-and-capture as the most significate differentiator for the overall experience. We want to address the key features through the onboarding panel and landing page, and make sure users can jump right into taking shots once that started.</p>
          </div>
          <div className="box center ph4">
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(1)}>
                <img
                alt="Wireframes for landing page experience."
                src={images[1]}
                width="100%"
              />
                <p className="tc f12 o-60">Wireframes for landing page experience.</p>
              </figure>
              <p className="f4 lh-copy fw4">We mapped the user flow for the screenshots experience and pointed out some interactions that can be simplified or refined to get better user perception.</p>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(2)}>
                <img
                alt="Taking shots & detail page user flow."
                src={images[2]}
                width="100%"
              />
                <p className="tc f12 o-60">Taking shots & detail page user flow.</p>
              </figure>
              <p className="f4 lh-copy fw4">We also applied our new Photon Design System to give our UI design a consistent look and feel, while having the freedom to create some new icons with our own touch.</p>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(3)}>
                <img
                alt="Redesigning the main screens using Sketch."
                src={images[3]}
                width="100%"
              />
                <p className="tc f12 o-60">Redesigning the main screens using Sketch.</p>
              </figure>
            </div>
        </div>
        <div className="box center ph4 pv100">
          <div>
            <h2 className="f2 mb5">Mirco Interactions</h2>
            <p className="f4 lh-copy fw4">While exchanging ideas with our engineers about the UX spec, I also provided some visual interactions on different aspects of the features. I use Codepen to quickly mockup some interaction ideas for the engineers to get a better idea of how things should behave. Here are some of the examples:</p>
            <div className="mt4 mb5-ns mb4">
                <p data-height="480" data-theme-id="dark" data-slug-hash="YZQbBG" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Mouse Tracking" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/YZQbBG/">IxD Series: Mouse Tracking</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f12 o-60">Eyes will follow the mouse while users are taking shots.</p><br/>
                <p data-height="480" data-theme-id="dark" data-slug-hash="xqaxXE" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Photo Viewer" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/xqaxXE/">IxD Series: Photo Viewer</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f12 o-60">Click to zoom in the shots users took.</p><br/>
                <p data-height="480" data-theme-id="light" data-slug-hash="LyvRpR" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Search Behavior" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/LyvRpR/">IxD Series: Search Behavior</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f12 o-60">Click the magnifying glass to expand and collapse the search field.</p><br/>
              </div>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
            <h2 className="f2 mb5">The New Design</h2>
            <p className="f4 lh-copy fw4">To reach our goals for the new design, we focus on simplifying the user experience, improving user interface polish and ensuring Screenshots works across all locales. We added an introductory landing page to explain Screenshots for the new users, a new onboarding flow to help users jumpstart the experience, and a significantly refined UI including new colors, animations, transitions, layouts and icons across the application. Designers and engineers worked together to make sure we deliver a high-quality experience for our users.</p>
            
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(4)}>
                <img
                alt="Onboarding experience for first time users."
                src={images[4]}
                width="100%"
              />
                <p className="tc f12 o-60">Onboarding experience for first time users.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(5)}>
                <img
                alt="Taking shots in action."
                src={images[5]}
                width="100%"
              />
                <p className="tc f12 o-60">Taking shots in action.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(6)}>
                <img
                alt="Detail page for your shots with sharing panel."
                src={images[6]}
                width="100%"
              />
                <p className="tc f12 o-60">Detail page for your shots with sharing panel.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(7)}>
                <img
                alt="My Shots page with your own collection of screenshots."
                src={images[7]}
                width="100%"
              />
                <p className="tc f12 o-60">My Shots page with your own collection of screenshots.</p>
              </figure>
          </div>
        </div>
        <div className="box center ph4 pv100">
          <div>
            <h2 className="f2 mb5">What's Next</h2>
            <p className="f4 lh-copy fw4">We take our users feedback seriously. As we obtained more users to try Firefox Screenshots, we got lots of interesting requests to help improve the overall experiences. One example is to combine screenshots with Firefox Account, so that users can access their screenshots on a different device if they log in with an account. Another example is to let user annotate the shots they took. Currently I'm leading the UX design for the new features, so stay tuned and we will see more updates soon!</p>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(8)}>
                <img
                alt="A work-in-progress annotation interface I was working on."
                src={images[8]}
                width="100%"
              />
                <p className="tc f12 o-60">A work-in-progress annotation interface I was working on.</p>
              </figure>
          </div>
        </div>
        <ImageBox onRef={ref => (this.child = ref)} content={images}/>
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
  onClick = (n) => {
    this.child.openLightboxOnSlide(n+1);
  };
 
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

    var images = ["../images/firefoxos-tv/image-0.png", "../images/firefoxos-tv/image-1.gif", "../images/firefoxos-tv/image-2.gif", "../images/firefoxos-tv/image-3.gif", "../images/firefoxos-tv/image-4.gif", "../images/firefoxos-tv/image-1.png"]

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
              <h2 className="f2 mb5">The Challenge</h2>
              <p className="f4 lh-copy fw4">This was my first project when I joined Mozilla in 2015, at that time the user interface had already well developed and defined, so the role for me is to continue driving the UX of some new features and help prototype and iterate some ideas with our users. The challenge here is to build on top of an already well-received product and continue to innovate the details. Read more about the user interface design <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS_for_TV/User_interface_animation_design" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(0)}>
              <img
                alt="Wireframes for the ideas about organizing homescreen with folders."
                src={images[0]}
                width="100%"
              />
              <p className="tc f6 o-60">Wireframes for the ideas about organizing homescreen with folders.</p>
            </figure>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center ph4">
              <h2 className="f2 mb5">Prototyping</h2>
              <p className="f4 lh-copy fw4">Prototyping for Smart TV is a very different experience since we have to control all the interfaces without a mouse. I made a web-based prototype that is solely controlled by keyboard and can be installed on a TV to navigate with a remote control. Users have to perform several tasks with the prototype, including rearranging the apps on the screen, filtering the view to show specific apps, creating a folder, and moving an item into that folder. The goal here is to understand how to create a better way for users to customize and organize their home screen. Here are some of the interactions we created:</p>
          </div>
          <div className="box center ph4">
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(1)}>
                <img
                alt="Rearranging the apps to customize your home screen."
                src={images[1]}
                width="100%"
              />
                <p className="tc f12 o-60">Rearranging the apps to customize your home screen.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(2)}>
                <img
                alt="Filtering the view to show specific apps."
                src={images[2]}
                width="100%"
              />
                <p className="tc f12 o-60">Filtering the view to show specific apps.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(3)}>
                <img
                alt="Creating a folder with selected apps."
                src={images[3]}
                width="100%"
              />
                <p className="tc f12 o-60">Creating a folder with selected apps.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(4)}>
                <img
                alt="Moving an app inside your folder."
                src={images[4]}
                width="100%"
              />
                <p className="tc f12 o-60">Moving an app inside your folder.</p>
              </figure>
            </div>
        </div>
        <div className="box center ph4 pv100">
          <div>
            <h2 className="f2 mb5">The Results</h2>
            <p className="f4 lh-copy fw4">The bad news is, Mozilla announced that it would no longer be developing the Firefox OS for the smartphone market in December 2015. In consequence, there's also no more Firefox OS for Smart TVs. Since Firefox OS is an open-source project, Panasonic was still able to develop its own "My Home Screen 2.0" based on the old OS. In a way, Firefox OS will continue live on in Panasonic’s 2017 TVs.</p>
          </div>
          <figure className="mt4 mb5-ns mb4 mh0 cp" onClick={() => this.onClick(5)}>
              <img
                alt="My Home Screen 2.0"
                src={images[5]}
                width="100%"
              />
              <p className="tc f6 o-60">Panasonic's "My Home Screen 2.0".</p>
            </figure>
        </div>
        <ImageBox onRef={ref => (this.child = ref)} content={images}/>
        <List prev={4} next={0}/>
        <Footer/>
      </section>
    );
  }
}