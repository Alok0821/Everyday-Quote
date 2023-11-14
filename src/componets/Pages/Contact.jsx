import React from 'react'
import ContactPhoneRoundedIcon from '@mui/icons-material/ContactPhoneRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';


const Contact = () => {
  return (
  <>
  <div className='Contact-container'>
      <h3>contact Us</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil corporis illum voluptas distinctio facere recusandae asperiores doloremque earum id officiis magnam culpa similique nemo repudiandae, tenetur doloribus deserunt fuga provident?</p>
    </div>

    <div className="Contact_table_container ">
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>Contact Detail <ContactPhoneRoundedIcon/></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><SupportAgentRoundedIcon style={{color:"red"}}/> 1800-00-000(Tollfree Number)</td>
          </tr>
          <tr>
          <td><AlternateEmailRoundedIcon style={{color:"blue"}}/>help@support.com </td>
          </tr>

          <tr>
          <td><CallRoundedIcon style={{color:"green"}}/>5678789090 </td>
          </tr>
        </tbody>
      </table>

    </div>
  </>
    
  )
}

export default Contact;
