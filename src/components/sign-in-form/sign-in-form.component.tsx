import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { 
    googleSignInStart, 
    emailSignInStart 
} from '../../store/user/user.action';

import { SignInFormContainer, FormButtonsContainer } from './sign-in-form.styles';

const defaultFormFields = {
    email: '',
    password: ''
};

const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            console.log('User sign in failed', error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <SignInFormContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    onChange={handleChange}
                    label="Email"
                    required 
                />
                <FormInput 
                    name="password" 
                    type="password" 
                    value={password} 
                    onChange={handleChange}
                    label="Password"
                    required 
                />
                <FormButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button 
                        buttonType={BUTTON_TYPE_CLASSES.google} 
                        onClick={signInWithGoogle} 
                        type="button"
                    >
                        Sign In with Google
                    </Button>
                </FormButtonsContainer>
            </form>
        </SignInFormContainer>
    );
}

export default SignInForm;