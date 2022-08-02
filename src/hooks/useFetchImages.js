import { useEffect, useState } from 'react'
import axios from 'axios';

export const useFetchImages = (breed) => {

    const [state, setState] = useState({
        images: [],
        loading: true
    });

    useEffect(() => {
        if (breed) {
            axios.get(`https://dog.ceo/api/breed/${breed}/images`)
                .then(({ data }) => {
                    setState({
                        images: data.message,
                        loading: false
                    })
                })
        }
	}, [breed]);

    return state;

}