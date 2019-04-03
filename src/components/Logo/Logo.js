import React from 'react';
import { Link } from 'react-router-dom';

import burgerLogo from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = props => (
    <Link exact to='/'>
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="SalBurger" />
        </div>
    </Link>
);

export default logo;