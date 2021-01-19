import React from 'react';
import PropTypes from 'prop-types';

const Heading = (props) =>{
  return <h1>{props.text}</h1>;
};

Heading.propTypes = {
  text: PropTypes.string,
};

export default Heading;
