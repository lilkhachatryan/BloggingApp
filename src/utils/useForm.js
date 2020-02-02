import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value}
        );
        setErrors(validate({[name]: value}));
    };

    const handleSubmit = () => {
        setErrors(validate(values));
        setIsSubmitting(true);
    };
    useEffect(() => {
        if (isSubmitting && Object.keys(errors).length === 0) {
            callback();
        }
    }, [errors]);

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
};

export default useForm;