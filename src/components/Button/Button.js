import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
    let className = ['button'];
    let buttonType = 'button';
    if(props.modifier && props.modifier === 'modal'){
        className.push('modal');
        buttonType = 'submit'
    } else {
        className.push('regular');
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
            type={buttonType}
            value={props.label}/>
    )
    
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: (props, propName) => {
        if(!props.modifier && (props[propName] === undefined || typeof(props[propName]) !== 'function')){
            return new Error(
                'onClick is required for button'
            )
        }
    },
    label: PropTypes.string.isRequired
}
export default Button;

