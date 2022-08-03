export const ImagePreview = ({ url }) => {

	return (
		<>
			<div class="segunda_columna">
                {
                    (url && <img src={ url } />)
                }
            </div>
		</>
	);

}

export default ImagePreview;