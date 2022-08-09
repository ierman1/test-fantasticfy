import { useState } from 'react'
import axios from 'axios';

export const useFetchBreeds = () => {

    const fetch = () => {
        console.log('Fetching breeds...')

		axios.get('https://dog.ceo/api/breeds/list/all')
            .then(({ data }) => {
                console.log('Done.')

                const breeds = [];

                Object.keys(data.message).forEach(breed => {
                    let object = { key: breed, subBreeds: data.message[breed] };

                    console.log('Fetching images for: ' + breed)

                    axios.get(`https://dog.ceo/api/breed/${breed}/images`)
                        .then(({ data }) => {
                            object.images = data.message;
                            console.log('Done.')
					        breeds.push(object)
                        })
                }) 

                setState({
                    breeds,
                    loading: false
                })
            })
	}

    const [state, setState] = useState({
        breeds: [],
        loading: true,
        fetch
    });

    return state;

}