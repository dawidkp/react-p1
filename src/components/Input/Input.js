import React from 'react';

const Input = ({
    type = 'text' | 'email' | 'password' | 'date' | 'number',
    title,
    placeholder,
    label,
    autoFocus,
    disabled,
    errorMessage,
    onChange,
    value

}) => {
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
    };

    return (
        <div>

            {label && <label>{label}</label>}

            <input
                type = {type}
                title = {title}
                placeholder = {placeholder}
                autoFocus = {autoFocus}
                disabled = {disabled}
                errorMessage = {errorMessage}
                value = {value}
                onChange = {handleChange}
            />
            
        </div>
    )
}

export default Input;
