import React, { Component } from 'react';
import data from '../data/data.js';
import $ from 'jquery';

class Pages extends Component {
  constructor(props) {
    super(props);
    const { match: { params } } = this.props;
    this.state = {
      view: params.id,
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
  switchView = (view) => {
    $(document).scrollTop(0);
    this.setState({
      view: view,
    });
  }
  
  render() {
    var title = this.props.match.params.id;
    const viewContainerMapping = {
      'firefox-lite': <Project01 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'screenshot-go': <Project02 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-color': <Project03 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-send': <Project04 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefox-screenshots': <Project05 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />,
      'firefoxos-tv': <Project06 data={data} view={this.state.view} switchView={this.switchView.bind(this)} />
    }
    let container = viewContainerMapping[this.state.view];
    
    return (
      <section id={title}>
        {container}
      </section>
    );
  }
}

export default Pages;


/************************************************************************************************************************* 



                                                        Views



*************************************************************************************************************************/

class Project01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    var $this = this;
    console.log("event01");
  }
  componentDidUpdate(){
    console.log("event01_update");
  }
 
  render() {
    return (
      <div>
        <h1>Project01</h1>    
      </div>
    );
  }
}

class Project02 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    var $this = this;
    console.log("event01");
  }
  componentDidUpdate(){
    console.log("event01_update");
  }
 
  render() {
    return (
      <div>
        <h1>Project02</h1>    
      </div>
    );
  }
}

class Project03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    var $this = this;
    console.log("event01");
  }
  componentDidUpdate(){
    console.log("event01_update");
  }
 
  render() {
    return (
      <div>
        <h1>Project03</h1>    
      </div>
    );
  }
}

class Project04 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    var $this = this;
    console.log("event01");
  }
  componentDidUpdate(){
    console.log("event01_update");
  }
 
  render() {
    return (
      <div>
        <h1>Project04</h1>    
      </div>
    );
  }
}

class Project05 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    var $this = this;
    console.log("event01");
  }
  componentDidUpdate(){
    console.log("event01_update");
  }
 
  render() {
    return (
      <div>
        <h1>Project05</h1>    
      </div>
    );
  }
}

class Project06 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    var $this = this;
    console.log("event01");
  }
  componentDidUpdate(){
    console.log("event01_update");
  }
 
  render() {
    return (
      <div>
        <h1>Project06</h1>    
      </div>
    );
  }
}