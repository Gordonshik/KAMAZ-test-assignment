import { useEffect } from 'react'
import { Image } from 'antd'
import { connect } from 'react-redux'
import store from '../../redux/store'

function MovieProfile({...props}) {
    const { image, name, description, language, date, genres, link, movies, word } = props
    console.log(props)

    const moviesArr = store.getState().users.movies
    const currentId = store.getState().users.movies

    const currentMovie = id => movies.find(movie => movie.show.id === id)
    useEffect(() => {
        
        currentMovie(currentId)
    })
    return (
        <div>
            <Image src={image}/>
            <p>Name: ${name} dasd</p>
            <p>description: ${description}</p>
            <p>Lang: {language}</p>
            <p>Date: {date}</p>
            <p>Genres: {genres}</p>
            <a src={link}>Official Link</a>
        </div>
    )
}


function mapStateToProps(store) {
    
    return {
        movies: store.movies,
        word: store.word
    };
  }

export default connect(mapStateToProps)(MovieProfile)