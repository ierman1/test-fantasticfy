import { useEffect } from 'react';
import PropTypes from 'prop-types'
import { useFetchBreeds } from '../hooks/useFetchBreeds';
import Breed from './Breed';

export const BreedList = ({ order, filter, setSelectedImage }) => {
	
	const { breeds, loading, fetch } = useFetchBreeds();

	// useEffect hook to fetch the data only when the element renders for the first time
	useEffect(() => {
		fetch();
	}, [])

	return (
		<>
			{ loading && <p>Loading...</p> }
			<div className="general">
			{ 
				// Sorting the array comparing the key of each breed and printing them
                breeds.sort((a, b) => (order ? a.key.localeCompare(b.key) : b.key.localeCompare(a.key))).map(breed => (
                    <Breed
                        key={ breed.key }
                        breed={ breed } 
						hidden={ !breed.key.includes(filter) }
						setSelectedImage={ setSelectedImage } />
                ))
            }
			</div>
		</>
	);

}

// PropTypes for BreedSearch
BreedList.propTypes = {
	order: PropTypes.bool.isRequired,
	filter: PropTypes.string.isRequired,
	setSelectedImage: PropTypes.func.isRequired
}

export default BreedList;