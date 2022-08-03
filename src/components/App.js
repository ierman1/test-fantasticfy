import { useState } from 'react';
import BreedList from './BreedList';
import { BreedSearch } from './BreedSearch';
import { ImagePreview } from './ImagePreview';

const App = () => {

    const [breed, setBreed] = useState([]);
    const [order, setOrder] = useState([true]);
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