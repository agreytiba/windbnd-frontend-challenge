import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "../styles/navbar.css"
import { useState } from 'react';

const Navbar = () => {
  const [searchCity, setSearchCity] = useState(false)
  const handleCity = () => {
    setSearchCity(!searchCity)
  }
  return (
      <div className="nav-container">
          <img src="/logo.svg" alt="windbnb logo" />
      <section className="search">
        <div>
          <input type="text" placeholder='Helsinki, Finland' className='city' onClick={handleCity}/>
          { searchCity && <section className='city-popup'>
           
            <ul type="none">
              <li><LocationOnIcon/>Helsinki, Finland</li>
              <li><LocationOnIcon/>Turku, Finland</li>
              <li><LocationOnIcon/>Oulu,Finland</li>
              <li><LocationOnIcon/>voasa, Finland</li>
            </ul>
          </section>}
        </div>
        <div>
          <input type="text" placeholder='Add guests' className='add-guest' />
          <div>
            <section className='guests-adults'>
              <h4>Adults</h4>
              <p>Ages 13 or above</p>
              <button>-</button><span>o</span> <button>+</button>
            </section>
            <section className='guest-children'>
              <h4>Children</h4>
              <p>Ages 2-12above</p>
              <button>-</button><span>o</span> <button>+</button>
            </section>
          </div>
        </div>
            
             <span> <SearchIcon className='search-icon'/></span>
          </section>
            
    </div>
  )
}

export default Navbar