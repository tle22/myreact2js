import React, { useState } from 'react';
import { Component } from 'react';
import Theme from './components/Theme';
export default function MyFirstPage() {
    const [clicks, setClicks] = useState(0);
    const [movies, setMovies] = useState([]);

    function onButtonClick() {
        console.log("CLICK!!!");
        setClicks(clicks + 1);
    }
    const getMovies = async function () {
        let movies = [
            { "id": "1", "title": "Star Wars", "releaseYear": "1977", "image": "https://www.csbootstrap.com/img/starwar.jpg" },
            { "id": "2", "title": "Back to the Future", "releaseYear": "1985", "image": "https://www.csbootstrap.com/img/back-to-the-future.jpg" },
            { "id": "3", "title": "The Matrix", "releaseYear": "1999", "image": "https://www.csbootstrap.com/img/matrix.jpg" },
            { "id": "4", "title": "Inception", "releaseYear": "2010", "image": "https://www.csbootstrap.com/img/inception.jpg" },
            { "id": "5", "title": "Interstellar", "releaseYear": "2014", "image": "https://www.csbootstrap.com/img/interstellar.jpg" }
        ]
        console.log("Data : ", movies);
        setMovies(movies);
    }

  return (
    <Theme>
    <div>
      <h1>Hello World !!! </h1>
      <div className="container">
        <div className="row">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
      
      <div className="mb-4">
                <button type="button" className="btn btn-danger" onClick={onButtonClick}>Click me</button>
                <p>Clicks: <span id="clicks">{clicks}</span></p>
            </div>
            <div className="mb-4">
                <div>
                    <div>
                        <button type="button" className="btn btn-secondary" onClick={getMovies} >แสดง Movies</button>
                    </div>
                    <div className="row" id="movie-row">
                        {movies.map((item) =>
                            <div className="col-lg-4" key={item.id}>
                                <div className="card">
                                    <img src={item.image} className="card-img-top" height="250" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <button className="btn btn-primary">Go somewhere</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
    </div>
    </Theme>
  );
}
