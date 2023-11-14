import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Dropingdown = () => {
  return (
    <div className='Dropdown_container'>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown" >
          <AccountCircleIcon style={{fontSize:"large"}} />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{background:' #007bff'}}>
          <Dropdown.Item href="#/signin" style={{background:' #007bff'}}><Link to={"/signin"}><li>SignIn</li></Link></Dropdown.Item>
          <Dropdown.Item href="#/actron-2"  style={{background:' #007bff'}}><Link to={"/signup"}><li>SignUp</li></Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Dropingdown;


