import styled, { css } from 'styled-components';

const colours = {
    sub: 'grey',
    main: 'black'
};

const shrinkLabelStyles = css`
    top: -14px;
    font-size: 12px;
    color: ${colours.main};
`;

type FormInputLabelProps = {
    shrink?: boolean;
}

export const FormInputLabel = styled.label<FormInputLabelProps>`
    color: $sub-color;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const FormGroup = styled.div`
    position: relative;
    margin: 45px 0;

    input[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export const FormInputField = styled.input`
    background: none;
    background-color: white;
    color: ${colours.sub};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${colours.sub};
    margin: 25px 0;

    &:focus {
        outline: none;
    }

    &:focus ~ ${FormInputLabel} {
        ${shrinkLabelStyles};
    }
`;