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
					breeds.push({ key: breed, subBreeds: data.message[breed] })
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