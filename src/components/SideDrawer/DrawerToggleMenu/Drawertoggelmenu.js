import React from "react";
import styles from './Drawertogglemenu.module.scss';


const drawertogglemenu = (props) => {
    let attachedStyles = [styles.header__toggle, styles.hide_for_desktop];
    if (props.toggleOn) {
        attachedStyles = [styles.header__toggle, styles.open, styles.hide_for_desktop];
    }
    return (
        <a className={attachedStyles.join(' ')} onClick={props.clicked}>
            <span></span>
            <span></span>
            <span></span>
        </a>
    );
}

export default drawertogglemenu;