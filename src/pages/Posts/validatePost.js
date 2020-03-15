import validator from "validator";

export default function validatePost(values) {
    let errors = {};
    if (values.hasOwnProperty('title')) {
        if (validator.isEmpty(values.title)) {
            errors.title = 'Title is required';
        } 
    }
    if (values.hasOwnProperty('about')) {
        if (validator.isEmpty(values.about)) {
            errors.about = 'Content is required';
        } 
    }
    if (values.hasOwnProperty('imgAsFile')) {
       if (validator.isEmpty(values.imgAsFile.name || values.imgAsFile)) {
            errors.imgAsFile = 'Image is required';
        }
    }
    return errors;
}