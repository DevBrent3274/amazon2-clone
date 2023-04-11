import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
    return (
        <div className='header'>
            <img className='header-logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            
            <div className='header-search'>
              <input className='header-searchInput' type='text' />
              <SearchIcon className='header-searchIcon' />
            </div>

            <div className='header-nav'>
              
              <div className='header-option'> 
                {/* Here with option one and two we can create 2 text lines 
                we can style in this container */}
                <span className='header-optionLineOne'>Hello Guest</span>
                <span className='header-optionLineTwo'>Sign In</span>
              </div>

              <div className='header-option'>
                <span className='header-optionLineOne'>Returns</span>
                <span className='header-optionLineTwo'>& Orders</span>
              </div>

              <div className='header-option'>
                <span className='header-optionLineOne'>Orders</span>
                <span className='header-optionLineTwo'>Your Prime</span>
              </div>
            
              <div className='header-optionBasket'>
                <ShoppingCartOutlinedIcon />
                <span className='header-optionLineTwo header-basketCount'>0</span>
              </div>
          </div>

        </div>
    )
}

export default Header