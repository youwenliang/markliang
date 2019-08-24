import React, { Component } from 'react';
import FsLightbox from 'fslightbox-react';

class ImageBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggler: false,
      slide: 1
    }
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(null)
  }

  openLightboxOnSlide(number) {
    this.setState({
      toggler: !this.state.toggler,
      slide: number
    });
  }
  
  render() {
    return (
      <FsLightbox
        toggler={this.state.toggler}
        slide={this.state.slide}
        sources={this.props.content}
      />
    );
  }
}

export default ImageBox;