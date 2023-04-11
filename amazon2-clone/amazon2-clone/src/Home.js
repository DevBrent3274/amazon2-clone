import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='home-image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/Phase4/1_DesktopHero_Unrec_1500x600._CB416684668_.jpg' alt='amazon banner' />
      </div>

      <div className='home-row'>
        <Product />
        {/* Product */}
      </div>

      <div className='home-row'>
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>

      <div className='home-row'>
        {/* Product */}
      </div>

      </div>
  );
}

export default Home;