import './App.css';
import { useState } from 'react';
import { moviesData } from './Data';
import { MovieList } from "./components/MovieList";
import AddNewMovie from './components/AddNewMovie';
import Search from './components/Search';
function App() {
  const [data, setData] = useState(moviesData);
  const handleDelete = (id) => setData(data.filter(el=>el.id!==id))
  const handleAdd = (newMovie) => setData([...data,newMovie])
  const handleEdit=(editMovie)=> setData(data.map(el=>el.id===editMovie.id? editMovie: el))
  const [rating, setRating] = useState("");
  const [textSearch, setTextSearch] = useState("");
  const handleSearch=(x) => setTextSearch(x)
  const handleRating = (y) => setRating (y)
  return (
    <div className="App">
      <Search textSearch={textSearch} rating={rating} handleSearch={handleSearch} handleRating={handleRating} />
      <AddNewMovie handleAdd={handleAdd}/>
    <MovieList list={data.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase()) && el.rating>=rating )} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  );
}

export default App;
