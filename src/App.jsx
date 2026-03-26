
import MovieList from './Components/MovieList/MovieList'
import Navbar from './Components/Navbar/Navbar'



const App = () => {
  return (
    <div className='bg-[#101010] min-h-screen text-white'>
      <Navbar/>
     
      <MovieList/>
    </div>
  )
}

export default App
