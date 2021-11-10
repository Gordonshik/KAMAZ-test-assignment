import { useState } from 'react';
import '../../App.css';
import { Input } from 'antd'
import { getData } from '../../api'
import MovieCard from '../../components/MovieCard'
import pinnedImg from '../../static/pinimg.jpg'
import { connect } from 'react-redux'
import { addMovies, changeWord } from "../../redux/actions"
import store from '../../redux/store'



const Main = ({...props}) => {
  const [searchingWord, setSearchingWord] = useState('')
  const [moviesData, setMoviesData] = useState([])
  const {state, movies, changeWord, addMovies, word, id} = props;


  const changeSearchingWord = async(word) => {
      setSearchingWord(word)
      const data = await getData(word)
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
      addMovies(sortedArr)
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

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Введите название сериала"
          value={searchingWord}
          onChange={(e) => changeSearchingWord(e.target.value)}/>
          <div style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            flexWrap: 'wrap',
          }}>
          {movieCards}
          </div>
      </header>
    </div>
  );
}

function mapStateToProps(store) {
  return {
      movies: store.counter.movies,
      word: store.counter.word,
      id: store.counter.id,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovies: moviesData => {
      store.dispatch(addMovies(moviesData))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
