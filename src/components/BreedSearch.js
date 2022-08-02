import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const BreedSearch = ({ setBreed }) => {

	const [inputValue, setInputValue] = useState('');
	
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length > 2) {
			setBreed(inputValue);
			setInputValue('');
		}
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input 
				type="text" 
				value={ inputValue } 
				onChange={ handleInputChange } />
		</form>
	);
}

BreedSearch.propTypes = {
	setBreed: PropTypes.func.isRequired
}

export default BreedSearch;