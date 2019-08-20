import React, { Component } from 'react';
import data from '../data/data.js';
import human from '../images/illustration1.svg';

class Writing extends Component {
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
    var cdata = data["contents"]["writing"];
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

    var writingH4 = {
      fontSize: !isMobile ? "30px":"20px",
      lineHeight: !isMobile ? "45px":"30px",
      color: "#010101",
      fontWeight: 700
    }
    var writingH5 = {
      fontSize: !isMobile ? "20px":"16px",
      lineHeight: !isMobile ? "30px":"24px",
      color: "#7BACCB",
      fontWeight: 500
    }

    var writing = [];

    for (var i = 0; i < cdata["post-titles"].length; i++) {
      var temp = (
        <div className="fl w-100 pa2" key={i}>
            <a className="title-links" href={cdata["post-links"]} target="_blank" rel="noopener noreferrer">
              <h4 style={writingH4} className="mt0 mb2-l mb2" dangerouslySetInnerHTML={{__html:"✍  "+cdata["post-titles"][i]}}></h4>
            </a>
            <h5 style={writingH5} className="mt0 mb3-l mb2" dangerouslySetInnerHTML={{__html:"— "+cdata["post-dates"][i]}}></h5>
        </div>
      )
      writing.push(temp);
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
            <p className="small-title mb40 ph2">{cdata["small-title"]}</p>
            <div className="cf mb100">
              {writing}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Writing;
