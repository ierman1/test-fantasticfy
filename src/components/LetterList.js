import PropTypes from 'prop-types'

export const LetterList = ({ list, setInitialLetter }) => {

	return (
		<div className="letter-list">
			<button onClick={ () => { setInitialLetter(null) } }>Reiniciar</button>
			{
                list.map((letter, index) => (
                    <button key={ index } onClick={ () => { setInitialLetter(letter) } }>{ letter }</button>
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