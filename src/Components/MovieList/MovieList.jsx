import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import _ from 'lodash'

const MovieList =() => {

  const [movies, setmovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [rating, setrating] = useState(0)
  const [sort, setsort] = useState({
    by:"default",
    order:"asc"
  })

  useEffect(() => {
    fetchMovies()
  }, [])

  useEffect(() => {
    if(sort.by!=="default"){
     const sortedMovies= _.orderBy(filteredMovies,[sort.by],[sort.order])
      setFilteredMovies(sortedMovies)
    }
  }, [sort])

  async function fetchMovies() {
    let res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=26ba38a28249a45b0b9230277c8fb98b")
    const data = await res.json()

    setmovies(data.results)
    setFilteredMovies(data.results) 
  }

  const handlefilter = (rate) => {
    if(rate===rating){
      setrating(0)
      setFilteredMovies(movies)
    }
    else{
      setrating(rate)

      const filtered = movies.filter(
        (movie) => movie.vote_average >= rate
      )

      setFilteredMovies(filtered)
    }
  }

  const handlesort=e=>{
    const {name,value}=e.target
    setsort(prev=>({...prev,[name]:value}))
  }

  return (
    <main>

      <div className='flex flex-col md:flex-row md:justify-between pt-4 px-4 sm:px-6 md:px-10 gap-4 md:items-center'>
        <h1 className='flex items-center text-lg sm:text-xl md:text-2xl font-bold text-[#f3e639]'>
          Popular <img src="/Images/fire.png" className="w-5 ml-2"/>
        </h1>

      <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 px-2 sm:px-4 md:px-10 items-center'>

        <ul className='listmovie flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5 text-xs sm:text-sm 
          [&>li]:cursor-pointer 
          [&>li]:transition 
          [&>li]:hover:scale-110 
          [&>li]:active:scale-90'>

          <li onClick={() => handlefilter(8)}>8+ Star</li>
          <li onClick={() => handlefilter(7)}>7+ Star</li>
          <li onClick={() => handlefilter(6)}>6+ Star</li>

        </ul>

        <select name="by" className='dropdown border px-2 py-1 rounded text-xs sm:text-sm' onChange={handlesort} value={sort.by}>
          <option value="default">SortBy</option>
          <option value="release_date">Date</option>
          <option value="vote_average">Rating</option>
        </select>

        <select name="order" className='dropdown border px-2 py-1 rounded text-xs sm:text-sm' onChange={handlesort} value={sort.order}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>

      </div>
      </div>

      {/* Movies */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 px-4 sm:px-6 md:px-10">
        {
          filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie}/>
          ))
        }
      </div>

    </main>
  )
}

export default MovieList