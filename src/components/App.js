import { useState } from 'react';
import BreedList from './BreedList';
import { BreedSearch } from './BreedSearch';
import { useFetchBreeds } from '../hooks/useFetchBreeds';

const App = () => {

    const [breed, setBreed] = useState([]);
	const { breeds, loading } = useFetchBreeds();

    return (
        <>
            <h2>Prueba Fantasticfy</h2>

            <BreedSearch setBreed={ setBreed }/>

            <hr/>

            <BreedList breeds={ breeds } loading={ loading } />
        </>
    );

}

export default App;