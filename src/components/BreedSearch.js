import PropTypes from 'prop-types'

export const BreedSearch = ({ setBreed, setInitialLetter }) => {

	// Handles the input change, updating the breed on the parent component
	const handleInputChange = (e) => {
		setBreed(e.target.value);
		setInitialLetter(null);
	}

	return (
		<input 
			type="text"
			onChange={ handleInputChange } />
	);
}

// PropTypes for BreedSearch
BreedSearch.propTypes = {
	setBreed: PropTypes.func.isRequired,
	setInitialLetter: PropTypes.func.isRequired
}

export default BreedSearch;