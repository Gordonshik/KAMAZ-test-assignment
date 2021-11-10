import { useState, useEffect } from 'react'
import '../../App.css'
import { Input } from 'antd'
import MovieCard from '../../components/MovieCard'
import pinnedImg from '../../static/pinimg.jpg'
import { connect } from 'react-redux'
import { addMovies, setData } from "../../redux/actions"
import store from '../../redux/store'
import './style.css'

const Main = ({...props}) => {
  const [searchingWord, setSearchingWord] = useState('')
  const { movies, setData } = props;

  useEffect(() => {
    if(localStorage.getItem('word')) {
      changeSearchingWord(localStorage.getItem('word'))
    }
  })

  const changeSearchingWord = async(word) => {
      setData(word)
      setSearchingWord(word)
      localStorage.setItem('word', word)
      localStorage.setItem('movies', movies)
  }

  const createMovieCard = arr => arr?.map(item => 
    <MovieCard 
    key={item.show.id}
    cover={item.show.image?.medium ? item.show.image.medium : pinnedImg}
    name={item.show.name}
    score={`${(item.score.toFixed(2) * 100).toFixed(2)} / 100`}  
    link={item.show.id}/>
  )

  const movieCards = createMovieCard(movies)

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Input the name of your favorite movie"
          value={searchingWord}
          onChange={(e) => changeSearchingWord(e.target.value)}
          className='main-input'/>
          <div className='movies-box'>
          {movieCards}
          </div>
      </header>
    </div>
  );
}

function mapStateToProps(store) {
  return {
      movies: store.users.movies,
      word: store.users.word,
      id: store.users.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovies: moviesData => {
      store.dispatch(addMovies(moviesData))
    },
    setData: word => store.dispatch(setData(word))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
