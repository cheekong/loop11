import React from 'react';
import './Button.css';

const Button = (props) => {
    let className = ['button'];
    if(props.modifier && props.modifier === 'modal'){
        className = ['modal__button'];
    }

    if(props.disabled){
        className.push('button--inactive');
    }
    
    className = className.join(' ');
    return(
        <input 
            disabled={props.disabled}
            onClick={props.onClick}
            className={className}
            type='button' 
            value={props.label}/>
    )
    
}

export default Button;