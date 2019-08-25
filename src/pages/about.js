import React, { Component } from 'react';
import data from '../data/data.js';
import Footer from '../components/footer.js';

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
      fontSize: !isMobile ? "54px":"30px",
      lineHeight: !isMobile ? "68px":"40px",
      color: "#222222",
      fontWeight: 700
    }
    var homeH2 = {
      fontSize: !isMobile ? "48px":"27px",
      lineHeight: !isMobile ? "60px":"36px",
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
      color: "#010101",
      fontWeight: 700 
    }

    var aboutH6 = {
      fontSize: !isMobile ? "18px":"14px",
      lineHeight: !isMobile ? "30px":"20px",
      color: "#818789",
      fontWeight: 500
    }

    var focus = [];
    var iw = isMobile ? "80" : "100";

    for (var i = 0; i < 4; i++) {
      var temp = (
        <div className="fl w-50-l w-100 pa3 tl-l tc" key={i}>
          <div className="bg-white pa4">
            <img className="mb3" src={icons[i]} width={iw} alt={cdata["focus-title"][i]}/>
            <h4 className="mv3-ns mv2" style={aboutH4} dangerouslySetInnerHTML={{__html:cdata["focus-title"][i]}}></h4>
            <h6 className="mt3-ns mt2 mb0 pre-wrap" style={aboutH6} dangerouslySetInnerHTML={{__html:cdata["focus-tag"][i]}}></h6>
          </div>
        </div>
      )
      focus.push(temp);
    }

    return (
      <section id="about" className="page">
        <div className="box center">
          <div className="flex flex-row-l flex-column ph4-l ph3 mb50">
            <div className="w-two-thirds-l w-100 ph2 o2">
              <h1 style={homeH1} dangerouslySetInnerHTML={{__html:cdata.h1}}></h1>
              <h3 style={homeH3} dangerouslySetInnerHTML={{__html:cdata.h3}}></h3>
              <a href={cdata.url} target='_blank' rel='noopener noreferrer'><div className="button mt2 mb0">{cdata.button}</div></a>
            </div>
            <div className="w-third-l w-100 ph2 o1 relative">
              <div className="bg-blue o-20 w-100 br-100 circle center"></div>
              <img className="human absolute left-0 right-0 center" src={human} height="515" alt="Mark Liang"/>
            </div>
          </div>
          <hr className="section-divider"></hr>
          <div className="ph4-l ph3 mb100">
            <div className="ph2">
              <p className="small-title mb40 mt0">{cdata["small-title"][0]}</p>
              <h2 style={homeH2} dangerouslySetInnerHTML={{__html:cdata["h1-mission"]}}></h2>
              <h3 style={homeH3} dangerouslySetInnerHTML={{__html:cdata["h3-mission"]}}></h3>
            </div>
          </div>
        </div>
        <div className="fade-section">
          <div className="box center">
            <div className="ph4-l ph2">
              <p className="small-title mb40 mt0 ph3">{cdata["small-title"][1]}</p>
              <div className="cf">
                {focus}
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}

export default About;
