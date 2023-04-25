import React, { Fragment } from 'react'
import classes from './Images.module.css';

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