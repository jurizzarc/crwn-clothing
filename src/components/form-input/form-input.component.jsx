import React from 'react';

import { FormGroup, FormInputField, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <FormGroup>
            <FormInputField 
                onChange={handleChange}
                {...otherProps} 
            />
            {
                label ? (
                    <FormInputLabel 
                        className={otherProps.value.length ? 'shrink' : ''}
                    >
                        {label}
                    </FormInputLabel>
                ) : null
            }
        </FormGroup>
    );
};

export default FormInput;