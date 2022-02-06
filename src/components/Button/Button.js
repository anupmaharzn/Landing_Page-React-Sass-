// yo button should be consideer as UI i guess 
import React from "react";


const button = (props) => {

    return (
        <a type='button' className={props.className}>{props.children}</a>
    );
}




export default button;