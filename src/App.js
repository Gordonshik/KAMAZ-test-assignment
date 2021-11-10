import { useState } from 'react';
import './App.css';
import { Input } from 'antd'
import { getData } from './api'
import MovieCard from './components/MovieCard'
import pinnedImg from './static/pinimg.jpg'
import { Routes, Route } from 'react-router'
import MovieProfile from './components/MovieProfile'
import Main from './components/Main'

const App = () => {
  const [searchingWord, setSearchingWord] = useState('')
  const [moviesData, setMoviesData] = useState([])

  const changeSearchingWord = async(value) => {
      setSearchingWord(value)
      const data = await getData(value)
      const sortedArr = data.sort((a, b) => {
        if (a.show.name < b.show.name) {
          return -1;
        }
        if (a.show.name > b.show.name) {
          return 1;
        }
        return 0;
      })
      setMoviesData(sortedArr)
      console.log(moviesData)
  }

  const createMovieCard = arr => arr?.map(item => 
    <MovieCard 
    key={item.show.id}
    cover={item.show.image?.medium ? item.show.image.medium : pinnedImg}
    name={item.show.name}
    score={`${item.score.toFixed(2) * 100} из 100`}  
    link={item.show.id}/>
  )

  const movieCards = createMovieCard(moviesData)

  return <>
      <Routes>MovieProfile
        <Route path="/" element={<Main />}/>
        {moviesData.map(item => 
        <Route 
        path={`/movie/${item.show.id}`} 
        element={<MovieProfile props={item}/>}/>
        )}
      </Routes>
  </>
}

export default App;
