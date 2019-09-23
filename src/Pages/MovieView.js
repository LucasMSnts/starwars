import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero'
import MovieDetail from '../Components/MovieDetail'
import MovieForm from '../Components/MovieForm'
import { getFilmById } from '../API/Dados'


const MovieView = ({ match }) => {
    const [film, setFilm] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
  
    const handleEdit = () => {
      setIsEditing(!isEditing)
      //Edição desabilitada
      // setIsEditing(!isEditing)
    }

    useEffect(() => {
        getFilmById(match.params.id).then(({ data }) => {
        setFilm(data)
    })
    }, [match.params.id]);

    return (
        <div>
          <Header />
          <Hero />
          {
            isEditing ?
              <MovieForm movie={film} /> :
              <MovieDetail movie={film} handleEdit={handleEdit} />
          }
        </div>
    )
}

export default MovieView