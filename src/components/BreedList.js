import PropTypes from 'prop-types'
import { useEffect } from 'react';
import Breed from './Breed';

export const BreedList = ({ breeds, loading, order, initialLetter, filter, setSelectedImage }) => {
	
	useEffect(() => {
	  console.log(breeds.filter(breed => breed.key.includes(filter)))
	}, [breeds])
	
	
	return (
		<>
			{ loading && <p>Loading...</p> }
			<div className="general">
				{ 
					// Sorting the array comparing the key of each breed and printing them
					breeds
						.filter(breed => (initialLetter ? breed.key.includes(filter) && breed.key[0] == initialLetter : breed.key.includes(filter)))
						.sort((a, b) => (order ? a.key.localeCompare(b.key) : b.key.localeCompare(a.key)))
						.map(breed => (
							<Breed
								key={ breed.key }
								breed={ breed }
								setSelectedImage={ setSelectedImage } />
					))
				}
			</div>
		</>
	);

}

// PropTypes for BreedSearch
BreedList.propTypes = {
	breeds: PropTypes.array.isRequired,
	loading: PropTypes.bool.isRequired,
	order: PropTypes.bool.isRequired,
	initialLetter: PropTypes.string,
	filter: PropTypes.string.isRequired,
	setSelectedImage: PropTypes.func.isRequired
}

export default BreedList;