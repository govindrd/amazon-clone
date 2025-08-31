import React from 'react'
import './Home.css'
import Product from './Product.jsx'

// product images
import front_page_Offer from './assets/images/Logo/front_page_Offer.jpg'
import valmiki_Rmayana from './assets/images/Logo/Valmiki_Ramayana.jpg';
import the_mock from './assets/images/Logo/The monk who sold his ferrari.jpg';
import fire_bolt from './assets/images/Logo/Fire-Boltt Maverick Smartwatch 51.308mm (2.02 inch) IPS Display, Luxury Stainless.jpg';
import air_Condition from './assets/images/Logo/Air conditioner.jpg'
import air_Conditions from './assets/images/Logo/Air conditioner.jpg';
import keybord from './assets/images/Logo/keyboard.jpg';
import who_will_cry from './assets/images/Logo/who_will_cry_when_you_die.jpg';
import washing_machine from './assets/images/Logo/washing machine.jpg';
import books from './assets/images/category_images/books.jpeg'
import tkeybord from './assets/images/Logo/keyboard.jpg';
import ttk from './assets/images/Logo/keyboard.jpg';
import beauty106 from './assets/images/category_images/beauty.jpeg';
// new
import grossary107 from './assets/images/category_images/grocery.jpeg';
import deals106 from './assets/images/category_images/deals.jpeg'
import appliances105 from './assets/images/category_images/appliances.jpeg'
import electronics104 from './assets/images/category_images/electronics.jpeg'
import mobiles103 from './assets/images/category_images/mobiles.jpeg'
import minitv102 from './assets/images/category_images/minitv.jpeg';
import home101 from './assets/images/category_images/home.jpeg';
import black_keybord110 from './assets/images/category_images/black Keybord.jpg';
import Motorola_edge50 from './assets/images/category_images/motorola.jpg';
// Dress for women
import Women_Pajama_Set01 from './assets/images/Dress/Louis Luxe.webp'
import Womens_Georgette_Bodycon_Maxi_Dress02 from './assets/images/Dress/LITZO.webp'
import The_Do_It_All_Dress03 from './assets/images/Dress/BlissClub.webp'
import Women_A_Line_Dress_Regular04 from './assets/images/Dress/INNAYARA DIVIRTA.webp'
import lamio05 from './assets/images/Dress/lymio.webp';
import majestic06 from './assets/images/Dress/Majestic Man.webp';
import slim07 from './assets/images/Dress/slim.webp'
import laptop400 from './assets/images/category_images/laptop.jpg'
import play1 from './assets/images/category_images/play1.jpg';
import play2 from './assets/images/category_images/play2.jpg';

function Home() {
  return (
    <div className='home'>


      <div className="home_container">
        <img className='home_image'
          src={front_page_Offer}
          alt="Amazon Banner" />



        <div className="home_row">
          <Product id="24230" title='Valmiki Ramayana' price={296.34}
            image={valmiki_Rmayana}
            rating={4} />

          <Product id="24231" title='The monk who sold his ferrari'
            price={325.34}
            image={the_mock}
            rating={4} />

          <Product id="24232" title='who will cry when you die'
            price={284.34}
            image={who_will_cry}
            rating={4} />
        </div>


        <div className="home_row">
          <Product id="24240"
            title='Panasonic 1.5 Ton 3 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 2-Way, PM 0.1 Filter, CS/CU-SU18AKY3W, White)'
            price={29653.34}
            image={air_Condition}
            rating={4} />

          <Product id="24241" title='Fire-Boltt Maverick Smartwatch 51.308mm (2.02 inch) IPS Display, Luxury Stainless'
            price={2349.34}
            image={fire_bolt}
            rating={4} />

          <Product id="24242" title='LG 7 Kg, 5 Star, Steam, Inverter Direct Drive Technology, 6 Motion DD, Fully-Automatic Front Load Washing Machine (FHB1207Z2W, Remove Allergens & Tough Stain, In-Built Heater, Essence White)'
            price={28769.34}
            image={washing_machine}
            rating={4} />

          <Product id="24243" title='The Complete Collection (Set of 7 Books)'
            price={674.34}
            image={books}
            rating={4} />
        </div>


        <div className="home_row">
          <Product id="24250"
            title='Panasonic 1.5 Ton 3 Star Premium Wi-Fi Inverter Smart Split AC (Matter Enabled, Higher Airflow, Copper Condenser, 7in1 Convertible, True AI, 2-Way, PM 0.1 Filter, CS/CU-SU18AKY3W, White)'
            price={5609.34}
            image={air_Conditions}
            rating={3} />

          <Product id="24250"
            title='EvoFox Katana S Mini Wireless Mechanical Keyboard | Tri-Mode (3X BT, 2.4GHz & Wired) Connectivity | Hot-Swappable Red Switches | 68-Key Compact Layout | Rainbow Backlight | Rechargeable Battery'
            price={2658.34}
            image={keybord}
            rating={5} />


        </div>


        <div className="home_row">
          <Product id="24241"
            title='Fire-Boltt Maverick Smartwatch 51.308mm (2.02 inch) IPS Display, Luxury Stainless'
            price={2349.34}
            image={fire_bolt}
            rating={4} />

          <Product id="50" title='Motorola Edge 50 Fusion 5G (Forest Blue, 12GB RAM, 256GB Storage)'
            price={25999.34}
            image={Motorola_edge50}
            rating={3} />

          <Product id="101" title='Preethi Zion Mixer Grinder for Kitchen - 4 Jars 750 Watt Mixie (3 Stainless steel Jars+1 Master Chef Plus Food processor Jar), Flexi lids, Vega W5 motor, Black (MG-227)'
            price={1265.34}
            image={home101}
            rating={4} />
        </div>
        
        <div className="HomeDeatilsLongCard">

          <div className="HomeDetailsLongCardtitle">Today's Deals </div>
          <div className="HomeDetailsLongCardItems">

            <div className="ScrollDiv">

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>
              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>
              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>






            </div>
          </div>

          {/* One More Scorll Bar */}

          

        </div>
 

        <div className="home_row">
          <Product id="107" title='grossary' price={1265.34}
            image={grossary107}
            rating={4} />

          <Product id="106" title='beauty' price={1125.34}
            image={beauty106}
            rating={4} />

          <Product id="101" title='Mixer' price={1025.34}
            image={home101}
            rating={4} />
        </div>


          {/* One More Scroll Bar */}

        <div className="HomeDeatilsLongCard">

          <div className="HomeDetailsLongCardtitle">Today's Deals </div>
          <div className="HomeDetailsLongCardItems">

            <div className="ScrollDiv">

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>
              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>
              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>

              <div className='HomeDetailsLongCardItem'>

                <img className='homeDetailsCardItemImg' src={play2} />

                <div className="homeDetailsCardImageDetails">
                  <div className="homeDetailsCardItemImgTopDetails">
                    <div className="homeDetailsPercentageOff">
                      <p>Up to 20% off</p>
                    </div>

                    <div className="limitedTimeDealhomeDetails">
                      Limited Time Deal
                    </div>
                  </div>

                  <div className="bottomHomeDetails">
                    iQOO Z9 5G | Starting @17999 Includ...
                  </div>
                </div>

              
              </div>






            </div>
          </div>


          

        </div>
 


        <div className="home_row">
          <Product id="110"
            title='EvoFox Katana S Mini Wireless Mechanical Keyboard | Tri-Mode (3X BT, 2.4GHz & Wired) Connectivity | Hot-Swappable Red Switches | 68-Key Compact | Rainbow Backlight | Rechargeable Battery'
            price={825.94}
            image={black_keybord110}
            rating={4} />

          <Product id="400"
            title='ZORBES® 6 Fans Cooling Pad Stand for Gaming Laptop with RGB Lighting and Dual USB Port, 6 Adjustable Height Angles with LCD Display for Gaming Laptop, Silent Cooling Pad, Supports Upto 17'
            price={1357.84}
            image={laptop400}
            rating={4} />
        </div>


        <div className="home_row">
          <Product id="01" title=' LOUIS LUXE Women Pajama Set'
            price={568.67}
            image={Women_Pajama_Set01}
            rating={4} />

          <Product id="02" title="Women's Georgette A-Line Maxi Dress"
            price={769.00}
            image={Womens_Georgette_Bodycon_Maxi_Dress02}
            rating={4} />

          <Product id="03" title='Women A Line Dress Regular'
            price={679.76}
            image={Women_A_Line_Dress_Regular04}
            rating={4} />

          <Product id="04" title='The Do It All Dress'
            price={489.48}
            image={The_Do_It_All_Dress03}
            rating={4} />
        </div>


        <div className="home_row">
          <Product id="05" title='Men Cargo || Men Cargo Pants Cotton || '
            price={587.78}
            image={lamio05}
            rating={4} />

          <Product id="06" title="Majestic Man Men's Cotton Blend Regular Fit Casual Polyester Mandarin Collar Ethnic Motifs Embroidered Long Regular Kurta"
            price={1189.95}
            image={majestic06}
            rating={4} />

          <Product id="07" title="Majestic Man Slim Fit Satin Cotton Formal Shirt for Men"
            price={670.00}
            image={slim07}
            rating={4} />
        </div>

      </div>
    </div>
  )
}

export default Home;
