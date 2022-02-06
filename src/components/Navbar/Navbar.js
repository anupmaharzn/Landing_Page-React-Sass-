import React from 'react';
import styles from './Navbar.module.scss';
import Logo from '../../assets/images/logo.svg';
import Drawertogglemenu from '../SideDrawer/DrawerToggleMenu/Drawertoggelmenu';
import NavigationItems from '../NavigationItems/NavigationItems';
import Button from '../Button/Button';
const navbar = (props) => (
    <header className={styles.header}>
        <nav className='container container__pall flex flex_jc_sb flex_ai_c'>
            <a href='/' className={styles.header__logo}>
                <img src={Logo} />
            </a>
            <Drawertogglemenu clicked={props.drawerToggleClicked} toggleOn={props.open} toggleOff={props.closed} />
            <NavigationItems className={`${styles.header__links} ${styles.hide_for_mobile}`} />
            <Button className={`${styles.button} ${styles.button_cta} ${styles.hide_for_mobile} `}>Request Invite</Button>
        </nav>
    </header >
);

export default navbar;