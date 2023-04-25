import axios from 'axios';
import classes from './FetchImages.module.css';
import React, { Fragment, useEffect, useState } from 'react'
import Image from './Image';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

function FetchImages() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getImages()
    }, []);

    const getImages = async() => {
        // const accessKey = process.env.REACT_APP_ACCESSKEY;
        const res = await axios.get(
            `https://api.unsplash.com/photos/random?client_id=KoFPQF-WKwwxEVgYOK9teoRrE4b7--AgVLA4H5sba5k&count=10`
        );
        console.log(res.data);
        setImages(res.data);
    }

  return (
    <Fragment>
        <header>
            <h1>Unsplash Images</h1>
        </header>
        <InfiniteScroll
            dataLength={images.length}
            next={getImages}
            hasMore={true}
            loader={<Loader />}
        >
            <div className={classes.images}>
                {images.map((image) => {
                    return(<Image key={image.id} {...image} />)
                })}
            </div>
        </InfiniteScroll>
    </Fragment>
  )
}

export default FetchImages;