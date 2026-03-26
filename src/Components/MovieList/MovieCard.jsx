import '../../index.css'

const MovieCard = ({ movie }) => {
  return (
    <div className='p-2 w-full sm:w-[48%] md:w-[30%] lg:w-[23%]'>
      
      <div className='relative group w-full'>
        
        <a 
          href={`https://www.themoviedb.org/movie/${movie.id}`} 
          target="_blank"
        >
          
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt="movie-photo" 
            className='w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg transition duration-300 group-hover:brightness-50'
          />

          <div className='absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition duration-300 text-[10px] sm:text-xs md:text-sm'>
            
            <h3 className='text-[#f3e639] font-semibold'>
              {movie.original_title}
            </h3>

            <p className='text-[#f3e639] pt-1'>
              {movie.release_date}
            </p>

            <p className='image flex items-center text-[#f3e639] gap-1 pt-2'>
              <img src="/Images/star.png" alt="fire img" />
              {movie.vote_average} 
            </p>

            <p className='text-white mt-1 line-clamp-3'>
              {movie.overview.slice(0, 100)}...
            </p>

          </div>

        </a>

      </div>

    </div>
  )
}

export default MovieCard