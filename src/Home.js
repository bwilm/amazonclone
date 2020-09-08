import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img alt=" " className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjJkZWQ0NTgt/YjJkZWQ0NTgt-MWE1MmNlZDAt-w1500._CB406132032_.jpg"></img>
           
           
           <div className="home_row">

           <Product
            title="Shure AONIC 50 Wireless Noise Cancelling Headphones, Premium Studio-Quality Sound, Bluetooth 5 Wireless Technology, Comfort Fit Over Ear, 20 Hours Battery Life, Fingertip Controls - Brown"
            id="123332223"
            price={399.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/7110DE2XQLL._AC_SX425_.jpg"
            
            />
           <Product
            title="DJI Mavic Mini - Drone FlyCam Quadcopter UAV with 2.7K Camera 3-Axis Gimbal GPS 30min Flight Time, less than 0.55lbs, Gray"
            id="2993883"
            price={399.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Rl8Rfd8vL._AC_SX679_.jpg"
            
            />

           </div>
           <div className="home_row">

           <Product
            title="Nanoleaf Rhythm Edition Smarter Kit - NL28-2003TW-9PK"
            id="123455999392"
            price={249.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZgOVkdBuL._AC_SX522_.jpg"
            
            />
           <Product
            title="Ray Ban RB2132 NEW WAYFARER Sunglasses For Men For Women"
            id="12234433334592"
            price={189.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61eQmj2J3TL._AC_UX679_.jpg"
            
            />
           <Product
            title="MediCos JoJo's Bizarre Adventure: Golden Wind: Giorno Giovanna Nendoroid Action Figure"
            id="12345774774592"
            price={70.00}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51CPGlVGfQL._AC_SY879_.jpg"
            
            />

           </div>
           <div className="home_row_3">

           <Product
            title="LG Full HD IPS UltraWide Monitor"
            id="57756637787"
            price={142.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81pv0g8bQhL._AC_SX679_.jpg"
            
            />

           </div>

        </div>



    )
}

export default Home
