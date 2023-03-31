
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validate(objUser){
    const errors = {};

    if(!regexEmail.test(objUser.username)){
        errors.username = "Insert your email."
    }else if(!objUser.username){
        errors.username = "Username can`t be empty."
    }else if(objUser.username.length > 35){
        errors.username = "Username must be under 35 characters."
    }

    if(!regexPassword.test(objUser.password)){
        errors.password = "Must have at least 1 number."
    }else if(objUser.password.length < 6 || objUser.password.length > 10){
        errors.password = "The password must have between 6 and 10 characters."
    }

    return errors;
};