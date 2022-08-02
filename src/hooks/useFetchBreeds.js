import { useEffect, useState } from 'react'
import axios from 'axios';

export const useFetchBreeds = () => {

    const [state, setState] = useState({
        breeds: [],
        loading: true
    });

    useEffect(() => {
		axios.get('https://dog.ceo/api/breeds/list/all')
            .then(({ data }) => {
                const breeds = [];

                Object.keys(data.message).forEach(breed => {
					breeds.push({ key: breed, subBreeds: data.message[breed] })
                }) 

                setState({
                    breeds,
                    loading: false
                })
            })
	}, []);

    return state;

}