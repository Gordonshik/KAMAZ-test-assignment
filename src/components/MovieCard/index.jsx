import { Card } from 'antd'
import { Link } from "react-router-dom"
import { changeId } from "../../redux/actions"
import store from '../../redux/store'
import { connect } from 'react-redux'
import MovieProfile from '../MovieProfile'
import './style.css'

const MovieCard = ({...props}) => {
  const {key, cover, name, score, link, movies} = props
  const { Meta } = Card

  const styles = {
    card: { 
      maxWidth: 340,
      width: '80%',
      margin: '0 20px 20px 20px',
      border: '4px solid black'
   }
  }

  const {card} = styles

  return (
  <>
     <Card
     key={key}
     hoverable
     style={card}
     cover={<img 
      className='movie-img'
      alt="example" 
      src={`${cover}`}
     loading />}
   >
     <Meta
      title={<p>
          <Link 
          to={`/movie/${link}`}
          element={<MovieProfile movies={movies} currentId={link}/>}> 
            {name}
          </Link>
        </p>}
      description={`${score}`}
    />
   </Card>
  </>
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
    changeId: id => {
      store.dispatch(changeId(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
