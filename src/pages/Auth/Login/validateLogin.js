import validator from "validator";

export default function validateLogin(values) {
    let errors = {};
    if (values.hasOwnProperty('email')) {
        if (validator.isEmpty(values.email)) {
            errors.email = 'Email is required';
        } else if (!validator.isEmail(values.email)) {
            errors.email = 'Enter valid email';
        }
    }

    if (values.hasOwnProperty('password')) {
        if (validator.isEmpty(values.password)) {
            errors.password = 'Password is required';
        } else if (!validator.isLength(values.password, {min: 6, max: 12})) {
            errors.password = 'Password should have min 6 and max 12 length';
        } else if (!/\d/.test(values.password)) {
            errors.password = 'Password must contain a digit';
        } else if (!/[!@#$%^&*]/.test(values.password)) {
            errors.password = 'Password must contain special character: !@#$%^&*';
        }
    }
    return errors;
}