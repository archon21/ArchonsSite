import React, { Component } from 'react';

class Animator extends Component {
  render() {
    const {
      inRef,
      children,
      scrolled,
      animation,
      maxWidth,
      maxHeight
    } = this.props;
    return (
      <div
        ref={inRef && inRef}
        className={` ${maxWidth} ${maxHeight} ${
          animation ? animation : 'a-wrapper--right'
        } ${scrolled > (inRef.current && inRef.current.offsetTop - 800) &&
          'visible'}

         flex minw-325px minh-325px w-100`}
      >
        {children}
      </div>
    );
  }
}

export default Animator;
