import PropTypes from 'prop-types'

export const LetterList = ({ list, setInitialLetter }) => {

	return (
		<div className="letter-list">
			{
                list.map(letter => (
                    <button onClick={ () => { setInitialLetter(letter) } }>{ letter }</button>
                ))
            }
		</div>
	);

}

// PropTypes for LetterList
LetterList.propTypes = {
	list: PropTypes.array.isRequired,
    setInitialLetter: PropTypes.func.isRequired
}

export default LetterList;