import PropTypes from 'prop-types'

export const BreedSearch = ({ setBreed }) => {

	const handleInputChange = (e) => {
		setBreed(e.target.value);
	}

	return (
		<input 
			type="text"
			onChange={ handleInputChange } />
	);
}

BreedSearch.propTypes = {
	setBreed: PropTypes.func.isRequired
}

export default BreedSearch;