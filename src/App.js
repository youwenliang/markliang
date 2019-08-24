import React, { Component } from 'react';
import { Transition, TransitionGroup, CSSTransition } from 'react-transition-group';
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
import data from './data/data.js';
// import loading from './images/loading.gif';

import Lottie from 'react-lottie';
import * as animationData from './data/loading_white.json'

class App extends Component {
  componentDidMount(){
    document.body.classList.add('overflow-y-hidden');
    document.getElementById('loading').classList.remove('fade');

    setTimeout(function(){
      document.getElementById('loading').classList.add('fade');
      document.body.classList.remove('overflow-y-hidden');
    },2000);
  }

  componentDidUpdate(){
    
  }

  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
      
    return (
      <main>
        <div id="loading" className="flex items-center justify-center">
          <Lottie options={defaultOptions} height={120} width={120} />
          {/*<img src={loading} alt="Loading..." width="80" height="80"/>*/}
        </div>
        <Nav active={window.location.pathname}/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path={'/'+data["pages"][1]} component={About} />
          <Route path={'/'+data["pages"][2]} component={Projects} />
          <Route path={'/'+data["pages"][2]+'/:id'} component={Pages} />
          <Route path={'/'+data["pages"][3]} component={Writing} />
          <Route path={'/'+data["pages"][4]} component={Talks} />
          <Route path={'/'+data["pages"][5]} component={Travel} />
        </Switch>
        <Footer/>
      </main>
    );
  }
}

export default App;
