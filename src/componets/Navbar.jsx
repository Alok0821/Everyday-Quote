import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
import Dropingdown from './Dropingdown';
import CottageRoundedIcon from '@mui/icons-material/CottageRounded';
import BeenhereRoundedIcon from '@mui/icons-material/BeenhereRounded';
import SatelliteAltRoundedIcon from '@mui/icons-material/SatelliteAltRounded';

const Navbar = () => {
  const menunavStyle=({isActive})=>{
    return(
      {color:isActive && "violet"}
    );

  }
  return (
    <>
    <nav className='nav-container'>
        <div className='menu-container'>
            <ul className='menu'>
                <NavLink to={"/"} style={menunavStyle}><li style={{marginTop:"5px"}}><CottageRoundedIcon style={{fontSize:'40px' , color:"rgb(212, 132, 46)"}} />Home</li></NavLink>
                <NavLink to={"/about"} style={menunavStyle}><li style={{marginTop:"5px"}}><BeenhereRoundedIcon style={{fontSize:'40px' , color:"rgb(212, 132, 46)"}}/>About</li></NavLink>
                <NavLink to={"/contact us"} style={menunavStyle}><li style={{marginTop:"5px"}}><SatelliteAltRoundedIcon style={{fontSize:'40px' , color:"rgb(212, 132, 46)"}}/>Contact Us</li></NavLink>
                {/* <Link to={"/signin"}><li>SignIn</li></Link> */}
                <NavLink  style={menunavStyle}><li>{<Dropingdown/>}</li></NavLink>
            </ul>
        </div>
    </nav>
      
    </>
  )
}

export default Navbar;
