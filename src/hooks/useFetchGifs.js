import {useState,useEffect} from 'react'
import {getGifts} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //los efectos no pueden ser async
    useEffect( () => {
        getGifts(category)
            .then( imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            });
    }, [category])

    // setTimeout( () => {
    //     setState({
    //         data: [1,2,3,4,5,6,7],
    //         loading: false
    //     })
    // },3000);
    
    return state; //{ data: [], loading:true};
}