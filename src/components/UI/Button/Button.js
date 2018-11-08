import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
    let className = ['button'];
    if(props.modifier && props.modifier === 'modal'){
        className.push('modal');
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
            type='button' 
            value={props.label}/>
    )
    
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}
export default Button;

