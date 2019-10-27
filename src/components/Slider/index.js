import React, { Component } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import './style.css';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/aurora.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/canyon.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/city.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/desert.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/mountains.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/redsky.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/sandy-shores.jpg',
        'https://s3.us-east-2.amazonaws.com/dzuz14/thumbnails/tree-of-life.jpg',
      ],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  goToPrevSlide = () => {
    const { currentIndex } = this.state;

    if (currentIndex !== 0) {
      this.load();
    }

    if (currentIndex === 0) {
      return;
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth(),
    }));
  };

  goToNextSlide = () => {
    this.load();
    const { currentIndex, images } = this.state;

    if (currentIndex === images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
    }));
  };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  load = () => {
    let i = 0;
    let width = 1;
    let elem = '';
    let frame = '';
    let id = '';

    if (i === 0) {
      i = 1;
      elem = document.getElementById('barProgress');
      frame = () => {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width += 1;
          elem.style.width = `${width}%`;
        }
      };
      id = setInterval(frame, 10);
    }
  };

  render() {
    const { translateValue, images } = this.state;

    return (
      <>
        <div className="slider">
          <div
            className="slider-wrapper"
            style={{
              transform: `translateX(${translateValue}px)`,
              transition: 'transform ease-out 1s',
            }}
          >
            {images.map((image, i) => (
              <Slide key={i} image={image} />
            ))}
          </div>
          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
        <BarProgress />
      </>
    );
  }
}

const LeftArrow = props => (
  <div className="backArrow">
    <FaArrowCircleLeft size="50px" onClick={props.goToPrevSlide} />
  </div>
);

const RightArrow = props => (
  <div className="nextArrow">
    <FaArrowCircleRight size="50px" onClick={props.goToNextSlide} />
  </div>
);

const BarProgress = () => (
  <div id="myProgress">
    <div id="barProgress" />
  </div>
);

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
  };
  return <div className="slide" style={styles} />;
};
