import React, { Fragment } from 'react'
import classes from './Image.module.css';

function Image(props) {
  return (
    <Fragment>
        <img 
            src={props.urls.full} 
            alt={props.user.name}
            loading='lazy'
            className={classes.images}
        />
    </Fragment>
  )
}

export default Image;