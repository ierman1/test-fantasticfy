import PropTypes from 'prop-types'

export const BreedSearch = ({ setBreed }) => {

	// Handles the input change, updating the breed on the parent component
	const handleInputChange = (e) => {
		setBreed(e.target.value);
	}

	return (
		<input 
			type="text"
			onChange={ handleInputChange } />
	);
}

// PropTypes for BreedSearch
BreedSearch.propTypes = {
	setBreed: PropTypes.func.isRequired
}

export default BreedSearch;