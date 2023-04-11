import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <img className='home-image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='amazon banner' />
      

      <div className='home-row'>
        <Product 
        id='12321341'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback' 
        price={19.99} 
        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' alt='product' 
        rating={5} 
        />
        <Product 
        id='49538094'
        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
        price={239.0} 
        image='https://m.media-amazon.com/images/I/81FgudLSgPL._AC_SX466_.jpg' alt='product' 
        rating={5}
        />
      </div>

      <div className='home-row'>
        <Product 
        id='4903850'
        title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor'
        price={199.99}
        image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg' alt='product'
        rating={4} 
        />
        <Product 
        id='23445930'
        title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
        price={98.99}
        image='https://m.media-amazon.com/images/I/71I6oj6ZFBL._AC_SX425_.jpg' alt='product'
        rating={5}
        />
        <Product 
        id='3254354345'
        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
        price={598.99}
        image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg' alt='product'
        rating={4}
        />
      </div>

      <div className='home-row'>
        <Product 
        id='90829332'
        title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440'
        price={1094.98}
        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg' alt='product'
        rating={4}
        />
      </div>

      </div>
    </div>
  );
}

export default Home;