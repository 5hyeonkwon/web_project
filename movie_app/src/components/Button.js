import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';
import './Movie.css';

const Button = ({ id, setSelectedNumber, url}) => {
  const onClickNumber = () => {
    console.log({ id }.id);
    setSelectedNumber({ id }.id);

  };

  return (
    <img className="button" onClick={onClickNumber} src = {url}>
    </img>
  );
};

export default Button;
