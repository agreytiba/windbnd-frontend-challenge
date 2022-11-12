
import Cardscollection from '../components/Cardscollection'
import Header from '../components/Header'
// styles are on the General.css file
const home = () => {
  return (
      <div className='home-container'>
          <div className='home-wrapper'>
              <Header />
              <Cardscollection/>
          </div>
    </div>
  )
}

export default home