import { useEffect } from 'react';
import { useFetchBreeds } from '../hooks/useFetchBreeds';
import Breed from './Breed';

export const BreedList = ({ order, filter, setSelectedImage }) => {
	
	const { breeds, loading, fetch } = useFetchBreeds();

	useEffect(() => {
		fetch();
	}, [])

	return (
		<>
			{ loading && <p>Loading...</p> }
			<div className="general">
			{ 
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

export default BreedList;