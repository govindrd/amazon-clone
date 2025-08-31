import React from 'react'
import amazonlogo from './assets/amazonLogo.png';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { Email } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Flag from './assets/images/Logo/flag.jpg'


function Header() {

  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    auth.signOut();

  }



  return (
    <div className='header'>

      <Link to="/">
        <img className="header_logo" src={amazonlogo} />

      </Link>


      <div className="navbarlocation">
        <div className="navbarlocationimage">
          <LocationOnIcon className='navbarLocationimagetag' sx={{ fontSize: '22px' }} />
        </div>
        <div className="navbarLocationPlace">
          <div className="navbarLocationTop"> Delivering to Banglore 560050</div>
          <div className="navbarLocationBottom">Update Lacation</div>
        </div>

      </div>



      <div className="navbarSearchBox">
        <div className="navbarSearchDiv">
          <div className="navbarSearchBoxAll">
            <div className="navbarSearchAllText">All</div>
            <ArrowDropDownIcon className='navbarSearchBoxIcon' sx={{ fontSize: '20px' }} />

          </div>

          <input className='header_searchInput' type="text" placeholder='search Amazon.in' />
          {/* Logo */}

          <div className="searchIconNavbar">
            <SearchIcon className="header_searchIcon" sx={{ fontSize: '26px' }} />

          </div>

        </div>
      </div>

      <div className="indianFlagcode">
        <img src={Flag} className="IndianFlag" />
        <div className="indianCodeNavbar">
          EN <ArrowDropDownIcon className='indianCodeNavbarIcon' sx={{ fontSize: '16px', marginTop: 1, marginLeft: -0.4 }} />
        </div>
      </div>


      <div className="header_nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header_option">
            {/* User email on the header side top on the sign in page */}
            <span className='header_optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>

            <span className='header_optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>

          </div>
        </Link>

        <Link to='/orders'>
          <div className="header_option">
            <span className='header_optionLineOne'>Returns</span>
            <span className='header_optionLineTwo'> & Orders</span>
          </div>
        </Link>

        <Link to={'/prime'}>
        <div className="header_option">
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        </Link>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className='header_optionLineTwo header_basketCount'>
              {basket?.length}
            </span>
          </div>

        </Link>

      </div>

    </div>

  )
}

export default Header;
