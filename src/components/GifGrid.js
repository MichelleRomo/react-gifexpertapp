import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifts } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    // const [images, setImages] = useState([])
    const {data:images, loading} = useFetchGifs(category);
    // useEffect( () => {
    //     //se ejecuta esta inst cuando el componente es renderizado por 1° vez
    //     getGifts(category)
    //         .then(setImages);
    //         // .then(imgs => setImages(imgs));
    // }, [category]) 

    // getGifts();

    return (
        <>
            <h3 className="animate__animated animate__zoomIn">{ category }</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map( (img) => (
                        <GifGridItem 
                                key={img.id}
                                {...img}
                                // img={img}
                        />
                    ))
                }
            </div>
        </>
    );
}
