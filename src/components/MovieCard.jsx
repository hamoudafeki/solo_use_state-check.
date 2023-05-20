import React from 'react'
import { StarRating } from './StarRating'
import EditMovie from './EditMovie'
export const MovieCard = ({movie, handleDelete,handleEdit}) => {
  return (
<div className='movie-card '>
<h3>{movie.name} </h3>
<img src={movie.image} alt={movie.name}/>
<StarRating rating={movie.rating}/>
<p>{movie.date}</p>
<div>
  <button onClick={() => handleDelete(movie.id)} className='btn'>Delete</button>
<EditMovie movie={movie} handleEdit={handleEdit}/>
</div>
</div>
  )
}
export default MovieCard