import React from 'react'
import "./index.css"
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const index = () => {
  return (
 <div className='all'>
    <div className='first'>
    <h3>GET IN TOUCH</h3>
    <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
    <div className='web'>
    <div className='ul'><FaFacebookF /></div>
    <div className='ul'><FaInstagram /></div>
    <div className='ul'><FaPinterestP /></div>
    <div className='ul'><FaSnapchatGhost /></div>
    <div className='ul'><BsYoutube /></div>
    </div>
    </div>
    <div className='second'>
        <h3>CATEGORIES</h3>
        <p>Men</p>
        <p>Women</p>
        <p>Dresses</p>
        <p>Sunglasses</p>
    </div>
    <div className='third'>
        <h3>Links</h3>
        <p>Search</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Returns</p>
    </div>
    <div className='fourth'>
        <h3>Help</h3>
        <p>Track Order</p>
        <p>Returns</p>
        <p>Shipping</p>
        <p>FAQs</p>
    </div>
    <div className='fifth'>
        <h3>Newslatter</h3>
        <p>email@example.com</p>
        <button>SUBSCRIBE</button>
    </div>
 </div>
  )
}

export default index