import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
const Welcome = () => {
    let navigate= useNavigate()
    const routeHandler=(e)=>{
        e.preventDefault()
        navigate("/")
    }

    return (
        <>

            <div className="col-md-6 d-flex align-items-center">
                <div className="ms-4" style={{ color: 'orange' }}><h4>
                    <PersonPinIcon /> user:{" "}
                    {localStorage.getItem('name') ? localStorage.getItem('name') : "NA"}
                </h4>
                    <h4>
                        <EmailIcon />  email :{" "}
                        {localStorage.getItem('email') ? localStorage.getItem('email') : "NA"}
                    </h4>
                    <br />
                    <button className="welcome_logout" onClick={routeHandler} ><LogoutIcon/>Logout</button>
                    <hr />
                </div>

            </div>
            
        </>
    )
};

export default Welcome;
