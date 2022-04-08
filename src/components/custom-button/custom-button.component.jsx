import React from 'react';

import { CustomButtonContainer, ButtonSpinner } from './custom-button.styles';

const CustomButton = ({ children, isLoading, ...props }) => {
    return (
        <CustomButtonContainer disabled={isLoading} {...props}>
            {isLoading ? <ButtonSpinner /> : children}
        </CustomButtonContainer>
    );
}

export default CustomButton;