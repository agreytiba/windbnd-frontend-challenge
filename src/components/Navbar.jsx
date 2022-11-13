import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../styles/navbar.css';
import { useState } from 'react';

const Navbar = () => {
	const [ searchCity, setSearchCity ] = useState(false);
	const [ isAge, setIsAge ] = useState(false);
	const [ isInputClicked, setIsInputClicked ] = useState(false);

	// onclick the age selection input
	const handleAge = () => {
		setIsAge(!isAge);
		setSearchCity(false);
		setIsInputClicked(true);
	};

	// onclick the  city selection input
	const handleCity = () => {
		setSearchCity(!searchCity);
		setIsAge(false);
		setIsInputClicked(true);
	};

	return (
		<div className="nav-container">
			{<img src="/logo.svg" alt="windbnb logo" />}
			<section className={isInputClicked && (isAge || searchCity) ? 'new-search' : 'search'}>
				<div>
					<input type="text" placeholder="Helsinki, Finland" className="city" onClick={handleCity} />
					{/* {(isAge||searchCity) && <span className='location'>LOCATION</span>} */}
					{searchCity && (
						<section className="city-popup">
							<ul type="none">
								<li>
									<LocationOnIcon />
									<span>Helsinki, Finland</span>
								</li>
								<li>
									<LocationOnIcon />
									<span>Turku, Finland</span>
								</li>
								<li>
									<LocationOnIcon /> <span>Oulu,Finland</span>
								</li>
								<li>
									<LocationOnIcon />
									<span>voasa, Finland</span>
								</li>
							</ul>
						</section>
					)}
				</div>
				<div>
					<input type="text" placeholder="Add guests" onClick={handleAge} className="add-guest" />
					{/* {(isAge|| searchCity)&& <span className='guests'>GUESTS</span>} */}
					{isAge && (
						<div className="age-range">
							<section className="guest-type">
								<h4>Adults</h4>
								<p>Ages 13 or above</p>
								<button>-</button>
								<span>o</span> <button>+</button>
							</section>
							<section className="guest-type">
								<h4>Children</h4>
								<p>Ages 2-12 above</p>
								<button className="select-room">-</button>
								<span>o</span> <button>+</button>
							</section>
						</div>
					)}
				</div>

				<button className="search-button">
					<SearchIcon className="search-icon" />
					{(isAge || searchCity) && <span>search</span>}
				</button>
			</section>
		</div>
	);
};

export default Navbar;
