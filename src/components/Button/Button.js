import React from "react";
import styles from './Button.module.scss';

const button = (props) => {

    return (
        <a type='button' className={`${styles.button} ${styles.header__cta} ${styles.hide_for_mobile} `} >{props.children}</a>
    );
}




export default button;