import React, { Component, useState, Fragment } from 'react';
import FsLightbox from 'fslightbox-react';
import ImageBox from '../components/lightbox.js';
import { buildUrl, instafeed } from 'react-instafeed'
import useAbortableFetch from 'use-abortable-fetch';

import gdata from '../data/data.js';
import human from '../images/illustration1.svg';

import p1 from '../images/photos/photo1.jpg';
import p2 from '../images/photos/photo1.jpg';
import p3 from '../images/photos/photo1.jpg';
import p4 from '../images/photos/photo1.jpg';
import p5 from '../images/photos/photo1.jpg';
import p6 from '../images/photos/photo1.jpg';

const options = {
  get: 'user',
  userId: '7690593619',
  clientID: 'bdef0c8381e9419ebd4480acdda8ab1f',
  accessToken: '7690593619.0b70b37.323d4351db884dca8f6be0e4dd11499c',
  resolution: 'standard_resolution',
}
const instagramURL = buildUrl(options);
var instagramImages = [];
var imageCount = 8;

class Travel extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      width: window.innerWidth,
      load: false
    }
  }
  componentDidMount() {
    var $this = this;
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();

    console.log(instagramURL);

    fetch(instagramURL)
    .then(function(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      // Read the response as json.
      return response.json();
    })
    .then(function(responseAsJson) {
      // Do stuff with the JSON
      console.log(responseAsJson);

      for (var i = 0; i < imageCount; i++) {
        var tempImg = responseAsJson.data[i].images["standard_resolution"].url;
        instagramImages.push(tempImg);
      }
      $this.setState({load: true})
    })
    .catch(function(error) {
      console.log('Looks like there was a problem: \n', error);
    });


  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
  }
  onClick = (n) => {
    this.child.openLightboxOnSlide(n);
  };
  
  render() {
    var cdata = gdata["contents"]["travel"];
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
    var box = isMobile ? "":"box";

    var instagram = [];
    if(this.state.load) {
      for(var k = 0; k < imageCount; k++) {
        var bg = {
          background: "url("+instagramImages[k]+") center no-repeat",
          backgroundSize: "cover"
        }
        instagram.push(
          <div className="fl w-25-l w-50 pa2-l pa1 pointer" key={k} onClick={this.onClick.bind(this, k+1)}>
            <div className="w-100 square" style={bg}></div>
          </div>
        )
      }
    }

    var imagebox = this.state.load ? (<ImageBox onRef={ref => (this.child = ref)} content={instagramImages}/>) : null;

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
        </div>
        <div className="fade-section">
          <div className="box center ph4-l ph3">
            <div className="ph2 tc">
              <div className="flex justify-between w-100">
                <p className="small-title mb40 mt0">{cdata["small-title"][1]}</p>
              </div>
            </div>
          </div>
          <div className={"center tc ph4-l ph0 "+box}>
            <div className="video-wrapper mb2-l mb1">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/hQAP3JU1ktA?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="button mt3">View More</div>
          </div>
        </div>
        <div className="box center mt100">
          <div className="ph4-l ph3">
            <div className="tc">
              <div className="flex justify-between w-100 ph2">
                <p className="small-title mb40 mt0">{cdata["small-title"][0]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"center tc mb100 "+box}>
          <div className="cf ph4-l ph0">
            {instagram}
            {imagebox}
          </div>
          <div className="button mt3 tc center">View More</div>
        </div>
      </section>
    );
  }
}

export default Travel;
