import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import '../styles/card.css';
const Card = ({card}) => {
	const [isSpecial, setIsSpecial] =useState(true)
	const { name, img, desc, rating, special } = card
	
	return (
		<div className="card">
			<img src={img} alt={name} />
			<section className="card-items">
				{isSpecial && <button>{ special}</button>}
				<p className="description">{ desc}</p>
				<span>
					<StarIcon className="star-icon" /> {rating}
				</span>
			</section>
			<h2>{name}</h2>
		</div>
	);
};
Card.defaultProps = {
special:""
};


export default Card;
