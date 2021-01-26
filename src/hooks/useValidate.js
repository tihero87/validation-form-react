import {useEffect, useState} from 'react';

export const useValidate = (value, validations) => {

    const [minLengthError, setMinLengthError] = useState(false);
    const [isEmpty, setEmpty] = useState(true);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [formValid, setValidForm] = useState(false);

    useEffect(() => {

        for(let validation in validations){

            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'email':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                case 'phonenumber':
                    const phone = /^[+\d-\s\(\)]+$/;
                    phone.test(value) ? setPhoneError(false) : setPhoneError(true);
                    break;
                default:
                    break;
            }
        }
    }, [value,validations]);

    useEffect(() => {
        if( isEmpty || minLengthError || emailError || phoneError){
            setValidForm(false);
        } else {
            setValidForm(true);
        }
    }, [isEmpty, phoneError, emailError, minLengthError]);

    return {
        isEmpty,
        minLengthError,
        emailError,
        phoneError,
        formValid
    }
};
