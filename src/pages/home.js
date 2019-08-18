import React, { Component } from 'react';
import data from '../data/data.js';

class Home extends Component {
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
    var cdata = data["contents"]["home"];
    const { width } = this.state;
    const isMobile = width <= 959;

    var homeH1 = {
      fontSize: !isMobile ? "48px":"30px",
      lineHeight: !isMobile ? "60px":"40px",
      color: "#010101",
      fontWeight: 700
    }
    var homeH3 = {
      fontSize: !isMobile ? "30px":"18px",
      lineHeight: !isMobile ? "48px":"30px",
      color: "#484848",
      fontWeight: 500
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
      fontSize: !isMobile ? "18px":"14px",
      lineHeight: !isMobile ? "27px":"18px",
      color: "#222222",
      fontWeight: 500
    }

    var details = [];
    for (var i = 0; i < 3; i++) {
      var temp = (
        <div className="fl w-100 w-third-l pa2" key={i}>
          <h5 className="mv2" style={homeH5} dangerouslySetInnerHTML={{__html:cdata.h5[i]}}></h5>
          <h4 className="mv2" style={homeH4} dangerouslySetInnerHTML={{__html:cdata.h4[i]}}></h4>
        </div>
      )
      details.push(temp);
    }

    var margin1 = isMobile ? "mb40":"mb50"
    var margin2 = isMobile ? "mb50":"mb100"

    return (
      <section id="home">
        <div className="box center">
          <div className={"flex flex-row-l flex-column ph4-l ph3 "+margin1}>
            <div className="w-two-thirds-l w-100 ph2 o2">
              <h1 style={homeH1} dangerouslySetInnerHTML={{__html:cdata.h1}}></h1>
              <h3 style={homeH3} dangerouslySetInnerHTML={{__html:cdata.h3}}></h3>
            </div>
            <div className="w-third-l w-100 ph2 o1">
              <div className="bg-blue o-20 w-100 br-100 circle center"></div>
            </div>
          </div>
          <div className={"cf ph4-l ph3 "+margin2}>
            {details}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
