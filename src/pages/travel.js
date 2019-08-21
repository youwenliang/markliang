import React, { Component } from 'react';
import data from '../data/data.js';
import human from '../images/illustration1.svg';

class Travel extends Component {
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
    var cdata = data["contents"]["travel"];
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

    return (
      <section id="about">
        <div className="box center">
          <div className="flex flex-row-l flex-column ph4-l ph3 mb100">
            <div className="w-two-thirds-l w-100 ph2 o2">
              <h1 style={homeH1} dangerouslySetInnerHTML={{__html:cdata.h1}}></h1>
              <h3 style={homeH3} dangerouslySetInnerHTML={{__html:cdata.h3}}></h3>
            </div>
            <div className="w-third-l w-100 ph2 o1 relative">
              <div className="bg-blue o-20 w-100 br-100 circle center"></div>
              <img className="human absolute left-0 right-0 center" src={human} width="200" alt="Mark Liang"/>
            </div>
          </div>
          <div className="ph4-l ph3">
            <div className="mb100 tc">
              <div className="flex justify-between w-100 ph2">
                <p className="small-title mb40">{cdata["small-title"][0]}</p>
              </div>
              <div className="cf">
                <div className="fl w-25-l w-50 pa2">
                  <div className="w-100 h5 bg-blue"></div>
                </div>
                <div className="fl w-25-l w-50 pa2">
                  <div className="w-100 h5 bg-blue"></div>
                </div>
                <div className="fl w-25-l w-50 pa2">
                  <div className="w-100 h5 bg-blue"></div>
                </div>
                <div className="fl w-25-l w-50 pa2">
                  <div className="w-100 h5 bg-blue"></div>
                </div>
                <div className="fl w-25-l w-50 pa2">
                  <div className="w-100 h5 bg-blue"></div>
                </div>
                <div className="fl w-25-l w-50 pa2">
                  <div className="w-100 h5 bg-blue"></div>
                </div>
                <div className="fl w-25-l w-50 pa2">
                  <div className="w-100 h5 bg-blue"></div>
                </div>
                <div className="fl w-25-l w-50 pa2">
                  <div className="w-100 h5 bg-blue"></div>
                </div>
              </div>
              <div className="button mt3 tc center">View More</div>
            </div>
            <div className="ph2 mb100 tc">
              <div className="flex justify-between w-100">
                <p className="small-title mb40">{cdata["small-title"][1]}</p>
              </div>
              <div class="video-wrapper">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hQAP3JU1ktA?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="button mt3">View More</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Travel;
