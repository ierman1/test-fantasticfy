import PropTypes from 'prop-types'

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

// PropTypes for ImagePreview
ImagePreview.propTypes = {
	url: PropTypes.string
}

export default ImagePreview;