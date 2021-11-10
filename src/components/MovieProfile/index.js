import { changeId } from "../../redux/actions"
import { Image } from 'antd'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { Link } from 'react-router-dom'
import additionalImg from '../../static/pinimg.jpg'
import './style.css'

function MovieProfile({...props}) {
    const { movies, currentId } = props

    const currentMovie = id => {    
        if(id && movies[0]){
            return movies.find(movie => movie.show.id === id).show
        }
    }

    const currentMovieInfo = currentMovie(currentId)
    
    const movieImg = currentMovieInfo?.image?.medium ? currentMovieInfo?.image?.medium : additionalImg
console.log(currentMovieInfo)
    return (
        <div className='movie-box'>
            <Image 
            src={movieImg}
            style={{
                width: 200,
                height: 250,
            }}
            preview={false}/>
            <p>Name: {currentMovieInfo?.name}</p>
            {currentMovieInfo?.summury}
            <p>Lang: {currentMovieInfo?.language}</p>
            <p>Date: {currentMovieInfo?.premiered}</p>
            <p>Genres: {currentMovieInfo?.genres}</p>
            <a href={currentMovieInfo?.url}>Official Link</a>
            <button className='movie-box__button'>
                <Link to='/'>
                    Назад
                </Link>

            </button>
        </div>
    )
}  

function mapDispatchToProps(dispatch) {
    return {
      changeId: id => {
        store.dispatch(changeId(id))
      }
    }
  }

export default connect(mapDispatchToProps)(MovieProfile)