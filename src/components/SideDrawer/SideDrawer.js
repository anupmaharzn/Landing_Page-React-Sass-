import React from 'react';
import styles from './SideDrawer.module.scss';
import Aux from '../../HOC/Auxiliary/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';
const sideDrawer = (props) => {
    let attachedStyles = [styles.overlay, styles.fade_out];
    if (props.open) {
        attachedStyles = [styles.overlay, styles.fade_in];
    }
    let navigationItems = props.open ? <NavigationItems className={styles.header__menu} /> : null;
    return (
        <Aux>
            <div className={attachedStyles.join(' ')}></div>
            {navigationItems}
        </Aux>
    );
}

export default sideDrawer;