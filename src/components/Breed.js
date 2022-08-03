import { useEffect } from "react";
import { useFetchImages } from "../hooks/useFetchImages";

export const Breed = ({ breed, hidden, setSelectedImage }) => {
    
	const { images, loading, fetch } = useFetchImages(breed.key);

    useEffect(() => {
        fetch()
    }, [])

	return (
		<div className={ breed.key + (hidden ? ' hidden' : '') }>
            <h3>{ breed.key }</h3>
            { loading && <p>Loading...</p> }
                <div className="images">
                {
                    images.slice(0).splice(0, 3).map((image, index) => (
                        <img
                            src={ image } 
                            key={ index }
                            onClick={ () => { setSelectedImage(image) } } />
                    ))
                }
                </div>
        </div>
	);

}

export default Breed;