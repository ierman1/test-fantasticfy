import { useState } from 'react';
import BreedList from './BreedList';
import { BreedSearch } from './BreedSearch';
import { ImagePreview } from './ImagePreview';

const App = () => {

    // Current breed written on the filter bar
    const [breed, setBreed] = useState('');

    // Order of the list determined by the sort button
    const [order, setOrder] = useState(true);

    // Last selected image
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <h2>Prueba Fantasticfy</h2>
            
            <BreedSearch setBreed={ setBreed }/>
            <button onClick={ () => { setOrder(!order) } }>Order: { order ? 'Ascending' : 'Descending' }</button>

            <hr/>

            <div className="wrapper">
                <BreedList order={ order } filter={ breed } setSelectedImage={ setSelectedImage } />
                <ImagePreview url={ selectedImage }/>
            </div>
        </>
    );

}

export default App;