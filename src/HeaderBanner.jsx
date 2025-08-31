import React from 'react'
import './HeaderBanner.css'
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderBanner() {
  const option =[

    {"name":"Fresh"}, 
    {"name":"MX Player"},
    {"name":"Sell"},
    {"name":"Bestsellers"},
    {"name":"Today's Deals"},
    {"name":"Mobiles"},
    {"name":"Prime"},
    {"name":"Customer Service"},
    {"name":"Electronics"},
    {"name":"Fashion"},
    {"name":"New Releases"},
    {"name":"Home & Kitchen"},
    {"name":"Amazon Pay"},
    {"name":"Computers"},
  ]
  return (
    <div className='secondHeader'>
      <div className="navbarBannerOptionLeft">

        <div className="optionNavbarBanner">
        <MenuIcon sx={{ fontSize: '24px'}} />
        <div className="allOptionNavbarBanner">All</div>
        </div>


        {
          option.map((item,ind)=>{
            return (
            <div className="optionNavbarBanner" key={ind}>
              <div className="allOptionNavbarBanner">{item.name}</div>
            </div>
            );
          })
        }

         </div>
      </div>
        
    
  )
}
