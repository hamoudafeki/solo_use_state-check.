import StarRating from './StarRating'

const Search = ({textSearch,rating,handleRating,handleSearch}) => {
  return (
    <div>
      <form>
        <input type="text" value={textSearch} onChange={eo=>handleSearch(eo.target.value)}/>
        <StarRating rating={rating} handleRating={handleRating}/>
      </form>
    </div>
  )
}

export default Search