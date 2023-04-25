import React from 'react';
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
        <h1>Unsplash Images</h1>
        <p>The internet's source for visuals.</p>
    </header>
  )
}

export default Header