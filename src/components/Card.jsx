import StarIcon from '@mui/icons-material/Star';
import '../styles/card.css';
const Card = () => {
	return (
		<div className="card">
			<img src="./hotel.jpg" alt="" />
			<section className="card-items">
				<button>SUPER HOT</button>
				<p className="description">Entire apartment.2beds</p>
				<span>
					<StarIcon className="star-icon" /> 4.0
				</span>
			</section>
			<h2>Stylist apartment in center of the city</h2>
		</div>
	);
};

export default Card;
