import React, { useContext,useEffect,useState } from 'react'
import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import imagee from "./../../assets/social-media.jpg"
import { Link, useNavigate } from 'react-router-dom';
import { DarkModeContext } from '../../context/DarkModeContext';
import { TokenContext } from '../../context/TokenContext';
export default function Navbar() {
  const [username, setusername] = useState(null)
  let { Token, setToken } = useContext(TokenContext);
  let navigate = useNavigate();
  const { toggle ,DarkMode} = useContext(DarkModeContext);

  function LogOut() {
    localStorage.removeItem("userToken");
    setToken(null);
    navigate("/login");
  }
  useEffect(() => {
    setusername(localStorage.getItem("username"));
  }, []);
  
  
  return (
    <div className='Navbar'>
        <div className="left">
            <Link to="/" className=' text-decoration-none'>
            <span >Newsocial</span>
            </Link>
           <Link to="/" className='homeIcon text-decoration-none'><HomeOutlinedIcon/></Link> 
            {DarkMode ? <WbSunnyOutlinedIcon style={{cursor:"pointer"}}  onClick={toggle}/>:<DarkModeOutlinedIcon style={{cursor:"pointer"}} onClick={toggle}/>}
            <GridViewOutlinedIcon/>
            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder='search ' />
            
            </div>
            <a
         onClick={() => LogOut()}
          style={{
            marginLeft: '15px',
            cursor: 'pointer',
            color: 'red',
            fontWeight: '500',
            textDecoration: 'none',
          }}
        >
          Logout
        </a>
        </div>
        <div className="right">
             <PersonOutlineOutlinedIcon/>
             <EmailOutlinedIcon/>
             <NotificationsOutlinedIcon/>
             <div className="user">
                <img src={imagee} alt="" />
                <span>{username}</span>
             </div>
        </div>
    </div>
  )
}
