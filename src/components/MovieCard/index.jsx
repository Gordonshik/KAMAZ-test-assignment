import { Card } from 'antd'
import { Link } from "react-router-dom"
import { changeId } from "../../redux/actions"
import store from '../../redux/store'
import { connect } from 'react-redux'
import MovieProfile from '../MovieProfile'

const MovieCard = ({...props}) => {
  const {key, cover, name, score, link, changeId} = props
  const { Meta } = Card

  return (
  <>
     <Card
     key={key}
     hoverable
     style={{ width: 240 }}
     cover={<img 
      alt="example" 
      src={`${cover}`}
      style={{width: '200px', height: '250px'}}
     loading />}
   >
     <Meta
      title={<p>
          <Link 
          onClick={() => changeId(link)}
          element={<MovieProfile />}
          to={`path/movie/${link}`}> 
            Название: {name}
          </Link>
        </p>}
      description={`Рейтинг: ${score}`}
    />
   </Card>
  </>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    changeId: id => {
      store.dispatch(changeId(id))
    }
  }
}

export default connect(mapDispatchToProps)(MovieCard)
