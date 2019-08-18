import React, { Component } from 'react';
import $ from 'jquery';

class Talks extends Component {
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
    return (
      <section>
        <p>This is a talks</p>
      </section>
    );
  }
}

export default Talks;
