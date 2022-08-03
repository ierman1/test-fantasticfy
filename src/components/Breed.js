import { useEffect } from "react";
import PropTypes from 'prop-types'
import { useFetchImages } from "../hooks/useFetchImages";

export const Breed = ({ breed, hidden, setSelectedImage }) => {
    
	const { images, loading, fetch } = useFetchImages(breed.key);

    // useEffect hook to fetch the images only when the element renders for the first time
    useEffect(() => {
        fetch()
    }, [])

	return (
		<div className={ breed.key + (hidden ? ' hidden' : '') }>
            <h3>{ breed.key }</h3>
            { loading && <p>Loading...</p> }
                <div className="images">
                {
                    // Cloning and splicing the image array so we only get the first 3 images
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

// PropTypes for Breed
Breed.propTypes = {
	breed: PropTypes.object.isRequired,
	hidden: PropTypes.bool.isRequired,
	setSelectedImage: PropTypes.func.isRequired
}

export default Breed;