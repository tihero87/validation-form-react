import React from 'react';
import './css/registration.css';
import {useInput} from "./hooks/useInput";


const RegistrationForm = () => {

    const login = useInput('', {isEmpty: true, minLength: 3} );
    const email = useInput('', {isEmpty: true, minLength: 5, email: false} );
    const phone = useInput('', {isEmpty: true, phonenumber: false} );

    return(
        <>
            <form>
                <h1>Регистрация пользователя</h1>
                <input
                    value={login.value}
                    onChange={login.onChange}
                    onBlur={login.onBlur}
                    className={login.minLengthError && login.isDirty ? 'error' : ''}
                    name='login'
                    type='text'
                    placeholder='Enter your login ... '
                />
                <input
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                    className={ email.emailError && email.isDirty? 'error' : ''}
                    name='email'
                    type='text'
                    placeholder='Enter your e-mail ... '
                />
                <input
                    value={phone.value}
                    onChange={phone.onChange}
                    onBlur={phone.onBlur}
                    className={phone.phoneError && phone.isDirty ? 'error' : ''}
                    name='phonenumber'
                    type='text'
                    placeholder='Enter your phone number ... '
                />
                <button disabled={ !login.formValid || !email.formValid || !phone.formValid } type='submit' >Registration</button>
            </form>
        </>
    )
};
export default RegistrationForm;