import { useState, useEffect } from 'react';
const useForm = (callback, validate, defaultState) => {
    const [values, setValues] = useState(defaultState);
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
        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
        } else {
            setIsSubmitting(false);
        }
    };
    useEffect(() => {
        if (isSubmitting && Object.keys(errors).length === 0) {
            try {
                callback();
            } catch (e) {
                console.log("err", e);
                setIsSubmitting(false);
            }
        } else {
            setIsSubmitting(false);
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