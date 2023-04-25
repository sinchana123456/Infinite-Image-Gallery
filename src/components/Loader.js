import React from 'react';
import classes from './Loader.module.css';

function Loader() {
  return (
    <section className={classes["lds-spinner"]}>
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </section>
    
  )
}

export default Loader;