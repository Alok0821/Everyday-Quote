import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import EmailIcon from '@mui/icons-material/Email';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';
import { Card } from 'react-bootstrap';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Signin = () => {
  const navigate = useNavigate()
  // states for storing user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //stored data in local storage via sign up
  const userEmail = localStorage.getItem('email');
  const userPassword = localStorage.getItem('password');

  const handleloginSubmit = (e) => {
    e.preventDefault();
    if (email === userEmail && password === userPassword) {
      toast.success("Login successfully");
      navigate('/userpage');                              //userpage
    }
    else {
      toast.error('Invalid email and password');
      navigate('/');
    }
  }


  return (
    <>
      <div className='SignIn-headling-container'>
        <h4 style={{textAlign:"center",color:"whitesmoke",marginTop:"80px",backgroundColor:"black"}}>SignIn</h4>
      </div>

        <div className='card_container_SignIn'>
          <div className="card-signin">
            <Card  style={{ width: "45%",borderRadius:"10%"}}>

              <Card.Body style={{  border: "none",borderRadius:"10%",  backgroundColor: 'rgb(72,39,39)'}}>

                <div className="SignIn_container">

                  <div class="input-group mb-2">

                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon2"><EmailIcon /></span>
                    </div>

                    <input type="email" placeholder='abc@gamil.com' id='email' value={email} autoComplete='off' onChange={(e) => { setEmail(e.target.value) }} class="form-control" aria-label="Username" aria-describedby="basic-addon2" />
                    <br />
                  </div>
                  <br />

                  <div class="input-group mb-2">

                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon3"><KeyRoundedIcon /></span>
                    </div>

                    <input type="password" placeholder='*******' id='password' value={password} autoComplete='off' onChange={(e) => { setPassword(e.target.value) }} class="form-control" aria-label="Username" aria-describedby="basic-addon3" />

                  </div>
                  <br />

                  <button className="LoginSubmit" onClick={handleloginSubmit}><ExitToAppIcon/>Login</button>
                  </div>

              </Card.Body>
            </Card>
          </div>
        </div>
      </>

      )
}

      export default Signin;
