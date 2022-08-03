export const ImagePreview = ({ url }) => {

	return (
		<>
			<div className="segunda_columna">
                {
                    (url && <img src={ url } />)
                }
            </div>
		</>
	);

}

export default ImagePreview;