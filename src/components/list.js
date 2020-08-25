import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/data.js';
import project1 from '../images/projects/project-zerda-cover.png';
import project2 from '../images/projects/screenshot-plus-cover.png';
import project3 from '../images/projects/firefox-color-cover.png';
import project4 from '../images/projects/firefox-send-cover.png';
import project5 from '../images/projects/firefox-screenshots-cover.png';
import project6 from '../images/projects/firefoxos-tv-cover.png';

var pcover = [project1, project2, project3, project4, project5, project6];

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
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
    const { width } = this.state;
    const isMobile = width <= 959;
    var bgStyle = {
      background: "#1F3140",
    }
    var aboutH4 = {
      fontSize: !isMobile ? "24px":"20px",
      lineHeight: !isMobile ? "24px":"20px",
      color: "#010101",
      fontWeight: 700 
    }
    var cdata = data["contents"]["projects"];
    return (
      <section className="pv100" style={bgStyle}>
        <div className="cf box center links">
          <h5 className="small-title white pl4">more projects</h5>
          <div className="fl w-50-l w-100 pa4 tl">
            <Link to ={'/projects/'+cdata["main-url"][this.props.prev]}>
            <div className="bg-white br3 overflow-hidden prev">
              <img src={pcover[this.props.prev]}/>
              <div className="pa4 bt bw1 b--blue">
                <h4 className="z1 mb3-ns mb2 mt0" style={aboutH4}>{cdata["main-tag"][this.props.prev]}</h4>
                <p className="z1 mt3-ns mt2 mb0 pre-wrap lh-copy fw5 o-50 dark-gray">{cdata["main-title"][this.props.prev]}</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="fl w-50-l w-100 pa4 tl">
            <Link to ={'/projects/'+cdata["main-url"][this.props.next]}>
            <div className="bg-white br3 overflow-hidden next">
              <img src={pcover[this.props.next]}/>
              <div className="pa4 bt bw1 b--blue">
                <h4 className="z1 mb3-ns mb2 mt0" style={aboutH4}>{cdata["main-tag"][this.props.next]}</h4>
                <p className="z1 mt3-ns mt2 mb0 pre-wrap lh-copy fw5 o-50 dark-gray">{cdata["main-title"][this.props.next]}</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default List;
