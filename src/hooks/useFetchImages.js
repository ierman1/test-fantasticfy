import { useState } from 'react'
import axios from 'axios';

export const useFetchImages = (breed) => {

    const fetch = () => {
        if (breed) {
            console.log('Fetching images for: ' + breed)

            axios.get(`https://dog.ceo/api/breed/${breed}/images`)
                .then(({ data }) => {
                    console.log('Done.')
                    setState({
                        images: data.message,
                        loading: false
                    })
                })
        }
	}
    
    const [state, setState] = useState({
        images: [],
        loading: true,
        fetch
    });

    return state;

}