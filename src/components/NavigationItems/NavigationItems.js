import React from 'react';
import './NavigationItems.scss';

const navigationItems = (props) => {
    let attachedStyles = [props.className];
    return (
        <div className={attachedStyles}>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
            <a href='#'>Blog</a>
            <a href='#'>Careers</a>
        </div>
    );
}

export default navigationItems;