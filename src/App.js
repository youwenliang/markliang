import React, { Component } from 'react';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';
import { play, exit } from './timelines'

import { Switch, Route } from 'react-router-dom';
import Home from './pages/home.js';
import About from './pages/about.js';
import Writing from './pages/writing.js';
import Talks from './pages/talks.js';
import Travel from './pages/travel.js';
import Projects from './pages/projects.js';
import Pages from './pages/pages.js';

import Nav from './components/nav.js';
import Footer from './components/footer.js';
import ScrollTop from './components/scrolltop.js';
import data from './data/data.js';
import $ from 'jquery';
// import loading from './images/loading.gif';

import Lottie from 'react-lottie';
import * as animationData from './data/loading_white.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      footer: false
    }
  }
  componentDidMount(){
    document.body.classList.add('overflow-y-hidden');
    document.getElementById('loading').classList.remove('fade');

    setTimeout(function(){
      document.getElementById('loading').classList.add('fade');
      document.body.classList.remove('overflow-y-hidden');
    },2000);
    window.addEventListener('resize', this.checkMobile);
    this.checkMobile();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.checkMobile);
  }
  checkMobile = () => {
    this.setState({ width: window.innerWidth });
    this.setState({ height: window.innerHeight });
  }
  componentDidUpdate(){
    
    $(window).scrollTop(0);
    if($('#home').css('visibility') === "hidden") {
      $('body').addClass('vh-100');
    } else {
      $('body').removeClass('vh-100');
    }
  }

  render() {
    const { width, height } = this.state;
    const isMobile = width <= 959;
    const isLow = height <= 1095;

    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
    console.log(window.location.pathname.split('/')[1]);
    let footer = null;
    if(window.location.pathname.split('/')[1]) {
      $('footer.bottom').addClass('fade');
    }
    else {
      $('footer.bottom').removeClass('fade');
      footer = isMobile || isLow ? null:(<Footer bottom={true}/>);
    }
      
    return (
      <main>
        <div id="loading" className="flex items-center justify-center">
          <Lottie options={defaultOptions} height={120} width={120} />
          {/*<img src={loading} alt="Loading..." width="80" height="80"/>*/}
        </div>
        <Nav active={window.location.pathname}/>
        <Route render={({ location }) => {
          const { pathname, key } = location

          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(node, isMobile, appears)}
                onExit={(node, appears) => exit(node, isMobile, appears)}
                timeout={{enter: isMobile ? 10 : 600, exit: isMobile ? 10 : 400}}
              >
                <Switch location={location}>
                  <Route exact path='/' component={Home} />
                  <Route path={'/'+data["pages"][1]} component={About} />
                  <Route exact path={'/'+data["pages"][2]} component={Projects} />
                  <Route path={'/'+data["pages"][2]+'/:id'} component={Pages} />
                  <Route path={'/'+data["pages"][3]} component={Writing} />
                  <Route path={'/'+data["pages"][4]} component={Talks} />
                  <Route path={'/'+data["pages"][5]} component={Travel} />
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }}/>
        {footer}
        <ScrollTop/>
      </main>
    );
  }
}

export default App;

