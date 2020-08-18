import React, { Component } from 'react';
import ImageBox from '../components/lightbox.js';
import data from '../data/data.js';
import Footer from '../components/footer.js';
import human from '../images/illustration5.svg';
import p1 from '../images/photos/photo1.jpg';
import p2 from '../images/photos/photo2.jpg';
import p3 from '../images/photos/photo3.jpg';
import p4 from '../images/photos/photo4.jpg';
import p5 from '../images/photos/photo5.JPG';
import p6 from '../images/photos/photo6.JPG';
import p7 from '../images/photos/photo7.jpg';

class Talks extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
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
  onClick = (n) => {
    this.child.openLightboxOnSlide(n);
  };
  
  render() {
    var cdata = data["contents"]["talks"];
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
    var photo = [];
    var url = [p1,p2,p3,p4,p5,p6,p7];
    for(var j = 0; j < url.length; j++) {
      var tempURL = {
        background: "url("+url[j]+") no-repeat center center",
        backgroundSize: "cover"
      }
      photo.push(tempURL);
    }

    var talk = [];
    var talkH3 = {
      fontSize: !isMobile ? "30px":"20px",
      lineHeight: !isMobile ? "45px":"30px",
      color: "#010101",
      fontWeight: 700
    }
    var talkH4 = {
      fontSize: !isMobile ? "24px":"16px",
      lineHeight: !isMobile ? "36px":"24px",
      color: "#7AABCA",
      fontWeight: 500
    }

    for (var i = 0; i < cdata["talk-titles"].length; i++) {
      var temp = (
        <div key={i}>
          <div className="fl w-20-l w-100 ph2 flex items-center">
            <h4 style={talkH4} className="mt1-l mt2 mb0-l mb1" dangerouslySetInnerHTML={{__html:cdata["talk-dates"][i]+"<span class='ml3-l ml1'>→</span>"}}></h4>
          </div>
          <div className="fl w-80-l w-100 ph2">
            <h3 style={talkH3} className="mt0 mb4-l mb3" dangerouslySetInnerHTML={{__html:cdata["talk-titles"][i]+"<span class='faded ml2-l ml0 db dib-l'>@"+cdata["talk-locations"][i]+"</span>"}}></h3>
          </div>
        </div>
      )
      talk.push(temp);
    }

    return (
      <section id="talks" className="page">
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
          <div className="ph4-l ph3">
            <p className="small-title mb40 mt0 ph2">{cdata["small-title"]}</p>
            <div className="cf mb100">
              {talk}
            </div>
            <div className="cf mb100">
              <div className="fl w-100 pa2 pointer" onClick={() => this.onClick(6)}>
                <div className="w-100 w-100 h5 bg-blue" style={photo[5]}></div>
              </div>
              <div className="fl w-100 w-40-l pa2 pointer" onClick={() => this.onClick(5)}>
                <div className="w-100 w-100 h5 bg-blue" style={photo[4]}></div>
              </div>
              <div className="fl w-100 w-60-l pa2 pointer" onClick={() => this.onClick(1)}>
                <div className="w-100 w-100 h5 bg-blue" style={photo[0]}></div>
              </div>
              <div className="fl w-100 w-60-l pa2 pointer" onClick={() => this.onClick(2)}>
                <div className="w-100 w-100 h5 bg-blue" style={photo[1]}></div>
              </div>
              <div className="fl w-100 w-40-l pa2 pointer" onClick={() => this.onClick(7)}>
                <div className="w-100 w-100 h5 bg-blue" style={photo[6]}></div>
              </div>
              <div className="fl w-100 w-40-l pa2 pointer" onClick={() => this.onClick(4)}>
                <div className="w-100 w-100 h5 bg-blue" style={photo[3]}></div>
              </div>
              <div className="fl w-100 w-60-l pa2 pointer" onClick={() => this.onClick(3)}>
                <div className="w-100 w-100 h5 bg-blue" style={photo[2]}></div>
              </div>
            </div>
            <ImageBox onRef={ref => (this.child = ref)} content={[p1,p2,p3,p4,p5,p6,p7]}/>
          </div>
        </div>
        <Footer/>
      </section>
    );
  }
}


export default Talks;