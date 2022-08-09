import PropTypes from 'prop-types'

export const Breed = ({ breed, setSelectedImage }) => {

	return (
		<div>
            <h3>{ breed.key }</h3>
            <div className="images">
            {
                // Cloning and splicing the image array so we only get the first 3 images
                breed.images.slice(0).splice(0, 3).map((image, index) => (
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
	setSelectedImage: PropTypes.func.isRequired
}

export default Breed;