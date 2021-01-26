import {useState} from 'react';
import {useValidate} from "./useValidate";

export const useInput = (initialValue, validations) => {

    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidate(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onBlur = (e) => {
        setDirty(true);
    };

    return {
        value,
        isDirty,
        onChange,
        onBlur,
        ...valid
    }
};