import { useEffect, useState } from 'react';
import BreedList from './components/BreedList';
import { BreedSearch } from './components/BreedSearch';
import { ImagePreview } from './components/ImagePreview';
import LetterList from './components/LetterList';
import { getInitialLetters } from './helpers/getInitialLetters';
import { useFetchBreeds } from './hooks/useFetchBreeds';

const App = () => {

    // Current breed written on the filter bar
    const [breed, setBreed] = useState('');

    // Order of the list determined by the sort button
    const [order, setOrder] = useState(true);

    // Last selected image
    const [selectedImage, setSelectedImage] = useState(null);

    // Dog breeds
	const { breeds, loading, fetch } = useFetchBreeds();
    
    // Order of the list determined by the sort button
    const [initialLetter, setInitialLetter] = useState(null);

	// useEffect hook to fetch the data only when the element renders for the first time
	useEffect(() => {
		fetch();
	}, [])

    return (
        <>
            <h2>Prueba Fantasticfy</h2>
            
            <BreedSearch setBreed={ setBreed } setInitialLetter={ setInitialLetter } />
            <button onClick={ () => { setOrder(!order) } }>Order: { order ? 'Ascending' : 'Descending' }</button>
            
            <LetterList 
                list={ getInitialLetters(breeds.filter(b => b.key.includes(breed))) } 
                setInitialLetter={ setInitialLetter } />

            <hr/>

            <div className="wrapper">
                <BreedList 
                    breeds={ breeds } 
                    loading={ loading } 
                    order={ order } 
                    initialLetter={ initialLetter } 
                    filter={ breed } 
                    setSelectedImage={ setSelectedImage } />
                <ImagePreview url={ selectedImage }/>
            </div>
        </>
    );

}

export default App;