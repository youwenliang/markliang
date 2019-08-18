import React, { Component } from 'react';
import $ from 'jquery';
import data from '../data/data.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: $(window).width() <= 959 ? true : false
    }
    this.checkMobile = this.checkMobile.bind(this);
  }
  componentDidMount() {
    var $this = this;
    window.addEventListener('resize', $this.checkMobile, false);
  }
  componentWillUnmount(){
    var $this = this;
    window.removeEventListener('resize', $this.checkMobile, false);
  }
  checkMobile() {
    var $this = this;
    if($(window).width() <= 959) $this.setState({mobile:true});
    else $this.setState({mobile:false});
  }
  
  render() {
    var cdata = data["contents"]["home"];
    var homeH1 = {
      fontSize: !this.state.mobile ? "48px":"30px",
      lineHeight: !this.state.mobile ? "60px":"40px",
      color: "#010101",
      fontWeight: 700
    }
    var homeH3 = {
      fontSize: !this.state.mobile ? "30px":"18px",
      lineHeight: !this.state.mobile ? "48px":"30px",
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
      fontSize: "18px",
      lineHeight: "27px",
      color: "#222222",
      fontWeight: 500
    }

    var details = [];
    for (var i = 0; i < 3; i++) {
      var temp = (
        <div class="fl w-100 w-third-l pa2" key={i}>
          <h5 className="mv2" style={homeH5} dangerouslySetInnerHTML={{__html:cdata.h5[i]}}></h5>
          <h4 className="mv2" style={homeH4} dangerouslySetInnerHTML={{__html:cdata.h4[i]}}></h4>
        </div>
      )
      details.push(temp);
    }

    var margin1 = this.state.mobile ? "mt0 mb40":"mt100 mb50"
    var margin2 = this.state.mobile ? "mb50":"mb100"

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
          <div class={"cf ph4-l ph3 "+margin2}>
            {details}
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
