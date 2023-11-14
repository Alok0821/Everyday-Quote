import React from 'react'
import { emailregEx, nameregEx, passwordregEx } from './Regex'
let errors = {}
const Validate = (id, value) => {
    if (id === "name") {
        if (value === "") {
            errors = { ...errors, [id]: `${id} is not valid` };
        } else if(!nameregEx.test(value)){
            errors = { ...errors, [id]: `${id} is not valid` };
        }else {
            errors = { ...errors, [id]: "" };
        }

    }

    // email validation
    if(id==="email"){
        if(value===""){
            errors={...errors,[id]:`${id} is not valid`};
        }else if(!emailregEx.test(value)){
            errors={...errors,[id]:`${id} is not valid`};
        }else{
            errors={...errors,[id]:''};
        }
    }

    //password validation

    if(id==="password"){
        if(value===""){
            errors={...errors,[id]:`${id} is not valid`};
        }else if(!passwordregEx.test(value)){
            errors={...errors,[id]:`${id} is not valid`};
        }else{
            errors={...errors,[id]:''};
        }
    }

    return errors;
}



export default Validate;
