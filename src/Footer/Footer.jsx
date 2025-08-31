import React from 'react'
import './Footer.css';
import amazonlogo from '../assets/images/footerLogo.png';
import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <div className='footer'>

      <div className="footerContaint">
        {/* Get to know Us */}

        <div className="footerCont1">
          <div className="footerTitle"> Get to Know Us</div>
          <div className="contentFooterSubTitleDiv">
            <div className="containtFooterSubTitleCount">About US</div>
            <div className="containtFooterSubTitleCount">careers</div>
            <div className="containtFooterSubTitleCount">Press Release</div>
            <div className="containtFooterSubTitleCount">Amazon Science</div>
          </div>

        </div>

        {/*  Conntect With Us*/}
        
        <div className="footerCont2">
          <div className="footerTitle">Conntect With Us</div>
          <div className="contentFooterSubTitleDiv">
            <div className="containtFooterSubTitleCount">Instagram </div>
            <div className="containtFooterSubTitleCount">Twitter</div>
            <div className="containtFooterSubTitleCount">LinkedIn</div>
            <div className="containtFooterSubTitleCount">Facebook</div>
          </div>

        </div>

        {/* Make Money With Us */}

        <div className="footerCont3">
          <div className="footerTitle">Make Money With Us</div>
          <div className="contentFooterSubTitleDiv">
            <div className="containtFooterSubTitleCount">Sell on Amazon </div>
            <div className="containtFooterSubTitleCount">Sell under Amazon Acceleration</div>
            <div className="containtFooterSubTitleCount">Protect Global Selling</div>
            <div className="containtFooterSubTitleCount">Amazon Global Selling</div>
            <div className="containtFooterSubTitleCount">Become an Affiliate</div>
            <div className="containtFooterSubTitleCount">Fulfilment by Amazon</div>
          </div>
        </div>

        {/* Lets Us Help You */}

        <div className="footerCont4">

          <div className="footerTitle"> Lets Us Help You</div>
          <div className="contentFooterSubTitleDiv">
            <div className="containtFooterSubTitleCount">Covid-19 and Amazon</div>
            <div className="containtFooterSubTitleCount">Yoour Account</div>
            <div className="containtFooterSubTitleCount">Return Center</div>
            <div className="containtFooterSubTitleCount">Help</div>
          </div>

        </div>

      </div>



      <div className="amazonlogohere">
        <Link to='/'>
          <img className='amazonimagefooter' src={amazonlogo} />
        </Link>
      </div>


    </div>
  )
}
