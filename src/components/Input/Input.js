import React from 'react';

const Input = ({
    type = 'text' | 'email' | 'password' | 'date' | 'number',
    title,
    placeholder,
    label,
    autofocus,
    disabled,
    errorMessage,
    onChange,
    value

}) => {
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
    };
}

export default Input;
