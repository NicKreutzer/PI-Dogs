
const validate = (form) => {
    let errors={};
    if(!form.name){
        errors.name = 'Name is required.'
    }
    if(!form.height){
        errors.height = 'Height is required.'
    }
    if(!form.weight){
        errors.weight = 'Weight is required.'
    }
    if(!form.life_span){
        errors.life_span = 'Life Span is required.'
    }
    if(form.temperamentID < 3){
        errors.temperamentID = '3 temperaments are required.'
    }
    return errors
};

export default validate;