import { useFetchImages } from "../hooks/useFetchImages";

export const Breed = ({ breed }) => {
    
	const { images, loading } = useFetchImages(breed.key);

	return (
		<div className="breed">
            <h3>{ breed.key }</h3>
            { loading && <p>Loading...</p> }
                <div className="images">
                {
                    images.splice(0, 3).map((image, index) => (
                        <img height="100"
                            src={ image } 
                            key={ index } />
                    ))
                }
                </div>
        </div>
	);

}

export default Breed;