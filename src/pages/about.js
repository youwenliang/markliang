import React, { Component } from 'react';
import data from '../data/data.js';

import human from '../images/illustration1.svg';
import icon1 from '../images/icon1.svg';
import icon2 from '../images/icon2.svg';
import icon3 from '../images/icon3.svg';
import icon4 from '../images/icon4.svg';
const icons = [icon1, icon2, icon3, icon4];

class About extends Component {
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
    var cdata = data["contents"]["about"];
    const { width } = this.state;
    const isMobile = width <= 959;

    var homeH1 = {
      fontSize: !isMobile ? "48px":"30px",
      lineHeight: !isMobile ? "60px":"40px",
      color: "#010101",
      fontWeight: 700
    }
    var homeH3 = {
      fontSize: !isMobile ? "24px":"18px",
      lineHeight: !isMobile ? "36px":"30px",
      color: "#484848",
      fontWeight: 500
    }

    var aboutH4 = {
      fontSize: !isMobile ? "30px":"20px",
      lineHeight: !isMobile ? "30px":"20px",
      color: "#010101",
      fontWeight: 700 
    }
    var aboutH5 = {
      fontSize: !isMobile ? "20px":"16px",
      lineHeight: !isMobile ? "30px":"20px",
      color: "#484848",
      fontWeight: 500
    }

    var aboutH6 = {
      fontSize: !isMobile ? "18px":"14px",
      lineHeight: !isMobile ? "30px":"20px",
      color: "#818789",
      fontWeight: 500
    }

    var focus = [];
    var mw = isMobile ? "" : "mwh400";

    for (var i = 0; i < 4; i++) {
      var temp = (
        <div className="fl w-50-ns w-100 pa2 mb4-ns mb3 tl-ns tc" key={i}>
          <img className="mb3" src={icons[i]} width="120" alt={cdata["focus-title"][i]}/>
          <h4 className="mv3-ns mv2" style={aboutH4} dangerouslySetInnerHTML={{__html:cdata["focus-title"][i]}}></h4>
          <h5 className={"mv4-ns mv3 db-ns dn "+mw} style={aboutH5} dangerouslySetInnerHTML={{__html:cdata["focus-content"][i]}}></h5>
          <h6 className="mv3-ns mv2 pre-wrap" style={aboutH6} dangerouslySetInnerHTML={{__html:cdata["focus-tag"][i]}}></h6>
        </div>
      )
      focus.push(temp);
    }

    return (
      <section id="about" className="page">
        <div className="box center">
          <div className="flex flex-row-l flex-column ph4-l ph3 mb100">
            <div className="w-two-thirds-l w-100 ph2 o2">
              <h1 style={homeH1} dangerouslySetInnerHTML={{__html:cdata.h1}}></h1>
              <h3 style={homeH3} dangerouslySetInnerHTML={{__html:cdata.h3}}></h3>
              <div className="button mt2">{cdata.button}</div>
            </div>
            <div className="w-third-l w-100 ph2 o1 relative">
              <div className="bg-blue o-20 w-100 br-100 circle center"></div>
              <img className="human absolute left-0 right-0 center" src={human} width="200" alt="Mark Liang"/>
            </div>
          </div>
          <div className="ph4-l ph3">
            <div className="ph2">
              <p className="small-title mb40">{cdata["small-title"][0]}</p>
              <h1 style={homeH1} dangerouslySetInnerHTML={{__html:cdata["h1-mission"]}}></h1>
              <h3 style={homeH3} dangerouslySetInnerHTML={{__html:cdata["h3-mission"]}}></h3>
            </div>
          </div>
          <div className="ph4-l ph3 mb50">
            <p className="small-title mb40 mt100 ph2">{cdata["small-title"][1]}</p>
            <div className="cf">
              {focus}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
