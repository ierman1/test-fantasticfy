import { useEffect, useState } from 'react'

export const useFetchBreeds = () => {

    const [state, setState] = useState({
        breeds: [],
        loading: true
    });

    useEffect(() => {
		
	}, []);

    return state;

}