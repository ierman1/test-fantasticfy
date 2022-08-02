import Breed from './Breed';

export const BreedList = ({ breeds, loading }) => {

	return (
		<>
			{ loading && <p>Loading...</p> }
			<div className="general">
			{
				breeds.map((breed, index) => (
					<Breed 
						key={ index } 
						breed={ breed } />
				))
			}
			</div>
		</>
	);

}

export default BreedList;