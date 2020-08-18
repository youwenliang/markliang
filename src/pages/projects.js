import React, { Component } from 'react';
import data from '../data/data.js';
import Footer from '../components/footer.js';
import human from '../images/illustration3.svg';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { width } = this.state;
    const isMobile = width <= 959;

    var homeH1 = {
      fontSize: !isMobile ? "54px":"30px",
      lineHeight: !isMobile ? "68px":"40px",
      color: "#222222",
      fontWeight: 700
    }
    var homeH3 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "36px":"30px",
      color: "#484848",
      fontWeight: 500
    }
    var aboutH4 = {
      fontSize: !isMobile ? "24px":"20px",
      lineHeight: !isMobile ? "24px":"20px",
      fontWeight: 700 
    }

    var main = [];
    for (var i = 0; i < 6; i++) {
      var temp = (
        <div className="cf mb40">
          <div className="fl w-40-l w-100 pa2 tl" key={i}>
            <h4 className="mb3-ns mb2 mt0" dangerouslySetInnerHTML={{__html:cdata["main-title"][i]}}></h4>
            <h6 className="mt3-ns mt2 mb0 pre-wrap" dangerouslySetInnerHTML={{__html:cdata["main-tag"][i]}}></h6>
            <p className="mt3-ns mt2 mb0 pre-wrap" dangerouslySetInnerHTML={{__html:cdata["main-des"][i]}}></p>
          </div>
          <div className="fl w-60-l w-100 pa2 tl-l tc" key={i}>
            <img src={cdata["main-img"][i]}/>
          </div>
        </div>
      )
      main.push(temp);
    }

    var side = [];
    for (var i = 0; i < 4; i++) {
      var bgSide = {
        backgroundImage: "url("+cdata["side-img"][i]+")",
        backgroundSize: "cover"
      }
      var temp = (
        <div className="fl w-50-l w-100 pa2 tl" key={i}>
          <div className="pa4 h300 white" style={bgSide}>
            <h4 className="mb3-ns mb2 mt100" style={aboutH4} dangerouslySetInnerHTML={{__html:cdata["side-title"][i]}}></h4>
            <h6 className="mt3-ns mt2 mb0 pre-wrap" dangerouslySetInnerHTML={{__html:cdata["side-tag"][i]}}></h6>
            <p className="mt3-ns mt2 mb0 pre-wrap lh-copy" dangerouslySetInnerHTML={{__html:cdata["side-des"][i]}}></p>
          </div>
        </div>
      )
      side.push(temp);
    }

    return (
      <section id="projects" className="page">
        <div className="box center">
          <div className="flex flex-row-l flex-column ph4-l ph3 mb50">
            <div className="w-two-thirds-l w-100 ph2 o2">
              <h1 style={homeH1} dangerouslySetInnerHTML={{__html:cdata.h1}}></h1>
              <h3 className="mb0" style={homeH3} dangerouslySetInnerHTML={{__html:cdata.h3}}></h3>
            </div>
            <div className="w-third-l w-100 ph2 o1 relative">
              <div className="bg-blue o-20 w-100 br-100 circle center"></div>
              <img className="human absolute left-0 right-0 center" src={human} height="515" alt="Mark Liang"/>
            </div>
          </div>
          <hr className="section-divider"></hr>
          <div className="ph4-l ph2 mb100">
            <p className="small-title mb40 mt0 ph2">{cdata["small-title"][0]}</p>
            {main}
          </div>
          <div className="ph4-l ph2 mb100">
            <p className="small-title mb40 mt0 ph2">{cdata["small-title"][1]}</p>
            <div className="cf">
              {side}
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}

export default Projects;
