import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// funciton asd() {}
// const asd = () => {}

const Movie = ({id, year, title,genres, poster,runtime ,rating, like, descript}) => {
  return (
    <div className="movie">
    <a  target="_blank">
      <img src={poster} alt={title} titlt={title}>
      </img>

    <p className="movie__year">
        <span>{year}년 개봉</span> 
      </p>
      <div className='movie__total'>
      <div className='movie__head'>
      <h4 className="movie__title">{
          title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")
        }</h4>
      <p className="movie__genres">
        <span>{genres.join(' , ')}</span> 
      </p> </div>
      <div className="movie__data">
      <h4 className="info">영화 정보</h4>
      <span className="movie__runtime">
        <span>{runtime}분</span> 
      </span>
      <span className="movie__rating">
        <span>평점: {rating}</span> 
      </span>
      <span className="movie__like">
        <span>좋아요:{like}</span> 
      </span>
      </div>
      <p className="movie__descript">
        <span><h3>줄거리<br></br><br></br>{descript}</h3></span>
      </p>
    </div>
  </a>
  </div>

  )
};

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  runtime: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  like: PropTypes.string.isRequired,
  descript: PropTypes.string.isRequired

};

export default Movie;
