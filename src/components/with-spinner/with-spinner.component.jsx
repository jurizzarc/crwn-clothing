import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// higher ordered component - a function that takes some component that we want to
// wrap with the functionality of the spinner loading feature
// the wrapped component gets passed into this new component
// determines based on the isLoading property that's passed into the component whether to render 
// the SpinnerOverlay or to just render the component we passed in as normal, 
// receiving all the props it would receive

// what we're getting back from the HOC is the Spinner component
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    };
    return Spinner;
};

export default WithSpinner;