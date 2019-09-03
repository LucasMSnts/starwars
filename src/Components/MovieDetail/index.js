import React from 'react'
import { withRouter } from 'react-router-dom';
import Button from "../Button"
import './movieDetail.css'

const MovieDetail = ({ movie, handleEdit, history }) => {

  const deleteFilm = () => {
    alert('Filme excluído com sucesso')
    history.push('/')
  }
  console.log(movie)
  return movie ? (    
    <div className="container">
      <img className="movie-img" src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" alt={movie.title} ></img>
      <div className="movie-box">
        <h2 className="box-title">{movie.title}</h2>
        <p>{movie.opening_crawl}</p>
        <p><b>Produtor: </b>{movie.producer}</p>
        <p><b>Data de Lançamento: </b>{movie.release_date}</p>
        <p><b>Episodio: </b>{movie.episode_id}</p>
        <p><b>Diretor: </b>{movie.director}</p>
        <p><b>URL: </b>{movie.url}</p>
        <p><b>Criado: </b>{movie.created}</p>
        <p><b>Editado: </b>{movie.edited}</p>
        <div className="btn-box">
          <Button className="btn btn-primary" onClick={handleEdit}>Editar</Button>
          <Button className="btn btn-secondary" onClick={deleteFilm}>Excluir</Button>
        </div>
      </div>
    </div>
  ) : <div>Filme selecionado não encontrado</div>
}

export default withRouter(MovieDetail)