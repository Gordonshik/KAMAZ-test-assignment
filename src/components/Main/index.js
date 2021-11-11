import { useState, useEffect } from 'react'
import '../../App.css'
import { Input, Pagination  } from 'antd'
import MovieCard from '../../components/MovieCard'
import pinnedImg from '../../static/pinimg.jpg'
import { connect } from 'react-redux'
import { addMovies, setData } from "../../redux/actions"
import store from '../../redux/store'
import './style.css'
import 'antd/dist/antd.css'

const Main = ({...props}) => {
  const [searchingWord, setSearchingWord] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { movies, setData } = props

  useEffect(() => {
    if(localStorage.getItem('word')) {
      changeSearchingWord(localStorage.getItem('word'))
    }
  })

  const paginate = movies => {
    let pages = []
    for(let i = 0; i < movies.length; i += 3) {
      pages.push(movies.slice(i, i + 3))
    }
    return pages
  }

  const paginatedMovies = paginate(movies)

  const numOfPages = paginatedMovies.length

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

  const getCurrentPageData = () => createMovieCard(paginatedMovies[currentPage - 1])

  const currentMoviesPage = getCurrentPageData()

  const changePage = page => {
    console.log(page)
    setCurrentPage(page)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Input
          placeholder="Input the name of your favorite movie"
          value={searchingWord}
          onChange={(e) => changeSearchingWord(e.target.value)}
          className='main-input'/>
          <div className='pagination-box'>
            <Pagination 
              current={currentPage} 
              total={numOfPages}
              pageSize={1}
              onChange={changePage}/>
          </div>
          <div className='movies-box'>
          {currentMoviesPage}
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
