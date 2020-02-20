import React, { Component } from 'react';
import ImageBox from '../components/lightbox.js';
import { buildUrl } from 'react-instafeed'
import Slider from "react-slick";

import gdata from '../data/data.js';
import Footer from '../components/footer.js';
import human from '../images/illustration5.svg';

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
          <div className="fl w-25-l w-50 pa2-ns pa0 pointer" key={k} onClick={this.onClick.bind(this, k+1)}>
            <div className="w-100 square" style={bg}></div>
          </div>
        )
      }
    }

    var imagebox = this.state.load ? (<ImageBox onRef={ref => (this.child = ref)} content={instagramImages}/>) : null;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <section id="travel" className="page">
        <div className="box center">
          <div className="flex flex-row-l flex-column ph4-l ph3 mb50">
            <div className="w-two-thirds-l w-100 ph2 o2">
              <h1 style={homeH1} dangerouslySetInnerHTML={{__html:cdata.h1}}></h1>
              <h3 style={homeH3} dangerouslySetInnerHTML={{__html:cdata.h3}}></h3>
              <a href={cdata.url[0]} target='_blank' rel='noopener noreferrer'><div className="button mt2 mb0">{cdata.button}</div></a>
            </div>
            <div className="w-third-l w-100 ph2 o1 relative">
              <div className="bg-blue o-20 w-100 br-100 circle center"></div>
              <img className="human absolute left-0 right-0 center" src={human} width="200" alt="Mark Liang"/>
            </div>
          </div>
        </div>
        <hr className="section-divider"></hr>
        <div className="box center">
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
        </div>
        <div className="fade-section mt100">
          <div className="box center ph4-l ph3">
            <div className="ph2 tc">
              <div className="flex justify-between w-100">
                <p className="small-title mb40 mt0">{cdata["small-title"][1]}</p>
              </div>
            </div>
          </div>
          <div className={"center tc ph4-l ph0 "+box}>
            <Slider {...settings}>
              <div className="video-wrapper mb2-l mb1">
                <iframe title="Whistler" id="iframeid1" width="560" height="315" src="https://www.youtube.com/embed/hQAP3JU1ktA?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="video-wrapper mb2-l mb1">
                <iframe title="Beijing" id="iframeid2" width="560" height="315" src="https://www.youtube.com/embed/B0oDiyoZT0c?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="video-wrapper mb2-l mb1">
                <iframe title="Netherlands" id="iframeid3" width="560" height="315" src="https://www.youtube.com/embed/7v4JpCHXhvA?controls=0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Slider>
            <a href={cdata.url[1]} target='_blank' rel='noopener noreferrer'><div className="button mt5 mb0">View more</div></a>
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}

export default Travel;
