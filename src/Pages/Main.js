import React, { useState, useEffect } from 'react'
import './main.css'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieItem from '../Components/MovieItem'
import { getFilms } from '../API/Dados'

const Main = () => {
    const [films, setFilms] = useState([]);
    useEffect(() => {
        getFilms().then(({ data }) => { // destructuring
        setFilms(data)
      }).catch((error) => {
        console.log(error)
      })
    }, []);

    return (
        <>
            <header>
                <Header />
                <Hero />
            </header>
            <div className="gallery-container">
                {
                    //console.log(films)
                    films.map(film => <MovieItem movie={film} key={film.id} />)
                }
            </div>
        </>
    );
}

export default Main;