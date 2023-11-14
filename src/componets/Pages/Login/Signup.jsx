import React from 'react'
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import { useState } from 'react';
import Validate from '../../../validation/Validate';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';



const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [termsCheck, setTermsCheck] = useState(false);
  const [disable,setDisable]=useState(true);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
     let submitFlag= true
    if (name === "" ) {
      submitFlag=false
      toast.error("name is required");
    } else if (email === "") {
      submitFlag=false;
      toast.error("email is required");
    } else if (password === "") {
      submitFlag=false;
      toast.error("password is required");
    } 
    if (submitFlag) {
      setDisable(true)
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("gender", gender);
      localStorage.setItem("termsCheck", termsCheck);
      toast.success("user saved")
      navigate('/signin')
         setDisable(false)
    }
   
  };

  // error handling with onBlur event
  const [errData, setErrData] = useState({});
  const handleBlur = (e) => {
    const { id, value } = e.target
    const error = Validate(id, value);
    const errlength = errData.length;
    console.log(parseInt(errlength));
    setErrData(error);
  }


const validateDiasableCheck=()=>{
  if(errData?.password == '' &&  errData?.email ==''){

  return false ;
  }
  return true;
}
// console.log(validateDiasableCheck(),"line 100")
  return (
    <>
      <div className='SignUp-headling-container'>
        <h4 style={{textAlign:"center",color:"whitesmoke",marginTop:"80px",backgroundColor:"black"}}>SignUp Here....</h4>
      </div>

      <div className="Signup_form_container">
        <form action="" className="signUp">

          <div class="input-group mb-2">
            
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><AccountBoxIcon /></span>
            </div>

            <input type="name" placeholder='Name' id='name' value={name} onChange={(e) => { setName(e.target.value) }} autoComplete='off' onBlur={handleBlur} class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            <span className="error">{errData?.name ? errData?.name : null}</span><br />
          </div>

          <div class="input-group mb-2">
            
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon2"><EmailIcon /></span>
            </div>

            <input type="email" placeholder='abc@gamil.com' id='email' value={email} autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} onBlur={handleBlur} class="form-control" aria-label="Username" aria-describedby="basic-addon2" />
            <span className="error">{errData?.email ? errData?.email : null}</span><br />
          </div>


          <div class="input-group mb-2">
            
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3"><KeyRoundedIcon /></span>
            </div>

            <input type="password" placeholder='*******' id='password' value={password} autoComplete='off' onChange={(e) => { setPassword(e.target.value) }} onBlur={handleBlur}  class="form-control" aria-label="Username" aria-describedby="basic-addon3" />
            <span className="error">{errData?.password ? errData?.password : null}</span><br />
          </div>

          <div className="Gender">
            Gender:
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name='Gender' id="inlineRadio1" value="Male" onClick={(e) => { setGender(e.target.value) }} />
              <label class="form-check-label" for="inlineRadio1">Male</label>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name='Gender' id="inlineRadio2" value="Female" onClick={(e) => { setGender(e.target.value) }} />
              <label class="form-check-label" for="inlineRadio1">Female</label>
            </div>



          </div>
          <div className='terms_condition_container'>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="defaultCheck1" checked={termsCheck} onChange={(e) => setTermsCheck(e.target.value)} />
              <label class="form-check-label" for="defaultCheck1">
                I Accept Term & Conditions
              </label>
            </div>

          </div>


          <br />
          <button className="Signup_btn" onClick={handleSignup} disabled={validateDiasableCheck()}><PersonAddRoundedIcon />Sign Up </button>
          <p style={{ fontWeight: '700',color: 'black'}}>Already have a account ? <span style={{ color: "orange" }}><Link to={"/signin"}> SignIn </Link></span> </p>
        </form>
      </div>

    </>


  )
}

export default Signup;
