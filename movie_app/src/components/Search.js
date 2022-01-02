import React, { useCallback, useState } from 'react';
import Movie from './Movie';
import Button from './Button';
import './Search.css';
import { yts } from '../api';
import { MdAdd } from 'react-icons/md';

const Search = () => {
  const [isLoading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(['']);
  const [movies_info, setMovies_info] = useState([]);
  const [name, setName] = useState('영화 검색');
  const [selectedNumber, setSelectedNumber] = useState('null');

  const getSearchMovie = async () => {
    try {
      if (value === ['']) {
        setMovies([]);
        setLoading(false);
      } else {
        setLoading(true);

        const res = await yts.search((value));
        setMovies(res.data.data.movies);
        setMovies_info([]);
        for (let i =0; i < res.data.data.movies.length; ++i) {
          let num = i ;
          const value = await yts.detail((res.data.data.movies[i].id));
          console.log(value.data.data.movie);
          setMovies_info(movies_info => movies_info.concat(value.data.data.movie));
          console.log(movies_info);
     
        }
        console.log(res.data.data.movies);
  
        setLoading(false);

        //alert("(Loading 메시지 확인중...)");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    getSearchMovie();



  };
  return (
    
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">
            ({name}) Loading... {value}
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="line">
            <div className="input_div">
              <h1 className="ss">yts.mx 영화 정보</h1>
              <div className="is">
                <input
                  className="input_search"
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="입력포멧:<정렬기준><검색개수> 예:like 5"
                />
                <button type="submit">
                  <MdAdd />
                </button>
              </div>
            </div>

            <div className="List">
              {movies_info.map((movie, idx) => (
                <Button key={idx} id={idx} setSelectedNumber={setSelectedNumber} url ={movies_info[idx].medium_cover_image} />
              ))}
              {selectedNumber != 'null' && (
                <Movie
                  id={movies_info[selectedNumber].id}
                  year={movies_info[selectedNumber].year}
                  title={movies_info[selectedNumber].title}
                  genres={movies_info[selectedNumber].genres}
                  poster={movies_info[selectedNumber].large_cover_image}
                  runtime={movies_info[selectedNumber].runtime}
                  rating={movies_info[selectedNumber].rating}
                  like ={movies_info[selectedNumber].like_count}
                  descript ={movies_info[selectedNumber].description_full}
                />
              )}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Search;
