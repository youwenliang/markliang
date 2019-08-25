import React, { Component } from 'react';
import data from '../data/data.js';
import Footer from '../components/footer.js';
import human from '../images/illustration1.svg';
import { Tween, Timeline } from 'react-gsap';
import { Zoom, Fade } from 'react-reveal';


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
      fontSize: !isMobile ? "54px":"30px",
      lineHeight: !isMobile ? "68px":"40px",
      color: "#222222",
      fontWeight: 700,
      marginBottom: 0
    }
    var homeH3 = {
      fontSize: !isMobile ? "30px":"18px",
      lineHeight: !isMobile ? "48px":"30px",
      color: "#484848",
      fontWeight: 500,
      margin: "0 auto"
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

    var margin = isMobile ? "mb50":"mb100"
    var background = {
      color: "white",
      textShadow: "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
      position: "absolute",
      fontSize: "160px",
      opacity: ".05",
      zIndex: "-1",
      left: 0,
      right: 0,
      margin: "auto",
      textAlign: "center"
    }

    return (
      <section id="home" className="page">
        <div className="box center">
          {/*<h1 style={background}>Mark Liang</h1>*/}
          <div className={"flex flex-row-l flex-column ph4-l ph3 "+margin}>
            <div className="w-two-thirds-l w-100 ph2 o2 relative">
              <h1 style={homeH1} dangerouslySetInnerHTML={{__html:cdata.h1}}></h1>
              <h3 style={homeH3} dangerouslySetInnerHTML={{__html:cdata.h3}}></h3>
            </div>
            <div className="w-third-l w-100 ph2 o1 relative">
              <div className="bg-blue o-20 w-100 br-100 circle center"></div>
              <img className="human absolute left-0 right-0 center" src={human} height="515" alt="Mark Liang"/>
            </div>
          </div>
          <div className={"cf ph4-l ph3 "+margin}>
            {details}
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}

export default Home;
