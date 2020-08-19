import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    var pdata = data["projects"];
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
    var projectH4 = {
      fontSize: !isMobile ? "30px":"20px",
      lineHeight: !isMobile ? "45px":"30px",
      color: "#010101",
      fontWeight: 700
    }
    var tagH5 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#7BACCB",
      fontWeight: 500
    }
    var tagH4 = {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#222222",
      textTransform: "uppercase",
      letterSpacing: "1px",
      fontWeight: 700
    }

    var main = [];
    for (var i = 0; i < 6; i++) {
      var temp = (
        <Link to ={'/projects/'+pdata["links"][i]}>
          <div className="cf mb40">
            <div className="fl w-40-l w-100 pa2 tl" key={i}>
              <h4 style={projectH4} className="mb3-ns mb2 mt0" dangerouslySetInnerHTML={{__html:cdata["main-title"][i]}}></h4>
              <h4 style={projectH4}  className="dark fw5 mv0">—</h4>
              <h6 style={tagH4} className="mt3-ns mt2 mb0 pre-wrap" dangerouslySetInnerHTML={{__html:cdata["main-tag"][i]}}></h6>
              <p style={tagH5} className="mt3-ns mt2 mb0 pre-wrap" dangerouslySetInnerHTML={{__html:cdata["main-des"][i]}}></p>
            </div>
            <div className="fl w-60-l w-100 pa2 tl-l tc" key={i}>
              <img className="ml4-l ml0" src={cdata["main-img"][i]}/>
            </div>
          </div>
        </Link>
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
        <a href={cdata["side-url"][i]} target="_blank">
          <div className="fl w-50-l w-100 pa2 tl" key={i}>
            <div className="pa4 h300 white" style={bgSide}>
              <h4 className="mb3-ns mb2 mt100" style={aboutH4} dangerouslySetInnerHTML={{__html:cdata["side-title"][i]}}></h4>
              <h6 className="mt3-ns mt2 mb0 pre-wrap tracked" dangerouslySetInnerHTML={{__html:cdata["side-tag"][i]}}></h6>
              <p className="mt3-ns mt2 mb0 pre-wrap lh-copy fw5" dangerouslySetInnerHTML={{__html:cdata["side-des"][i]}}></p>
            </div>
          </div>
        </a>
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
