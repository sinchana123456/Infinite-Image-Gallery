import React,{useState, useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GetImageList } from '../store/ImagesListSlice';
import Loader from './Loader';
import Image from './Image';
import classes from './ImageList.module.css';

const ImageList = () =>{
    const dispatch = useDispatch()

    const [page, setPage] = useState(1)
    const images = useSelector((state) => state.images.imageCollection)
    const hasMore = useSelector((state) => state.images.hasMore)
    
    useEffect(() => {
        dispatch(GetImageList(1))
        setPage(prevState => prevState + 1)
    }, [dispatch])

    const fetchImages = () => {
        setPage(prevState => prevState + 1)
        setTimeout(() => {
            if(hasMore){
                dispatch(GetImageList(page))
            }
        },1000)
    }

    const imageDetails =
        (images ?
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={hasMore}
                loader={<Loader />}>
                    {
                        <div className={classes.images}>
                            {images.map((image) => {
                                return(<Image key={image.id} {...image} />)
                            })}
                        </div>
                    }
                   
                </InfiniteScroll> : <h3>No Records Found</h3>
                
                )

    return (
        <div>{imageDetails}</div>
    )
}

export default ImageList;