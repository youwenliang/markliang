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
          <div className="ph4-l ph3">
            <div className="ph2">
              <p className="small-title mb40 mt0">{cdata["small-title"][0]}</p>
              <p className="small-title mb40 mt0">{cdata["small-title"][1]}</p>
            </div>
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}

export default Projects;
