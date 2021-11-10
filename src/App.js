import './App.css';
import { Routes, Route } from 'react-router'
import MovieProfile from './components/MovieProfile'
import { connect } from 'react-redux'
import Main from './components/Main'

const App = ({...props}) => {
  const { movies } = props

  return <>
      <Routes>
        <Route path="/" element={<Main />}/>
        {movies.map(item => 
        <Route 
        path={`/movie/${item.show.id}`} 
        element={<MovieProfile movies={movies} currentId={item.show.id}/>}/>
        )}
      </Routes>
  </>
}

function mapStateToProps(store) {
  return {
      movies: store.users.movies,
      word: store.users.word,
      id: store.users.id,
  };
}

export default connect(mapStateToProps)(App)
