import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { BsBasket3 } from "react-icons/bs";

const Navbar = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    };

    return (
        <nav>
            <div className="container">
                <Link to="/" className="logo"><img src="https://preview.colorlib.com/theme/fashe/images/icons/logo.png" alt=""/></Link>
                <div className='web1'>
                    <li><Link className='li' to="/">HOME</Link></li>
                    <li><Link className='li' to="/wishlist">WISHLIST</Link></li>
                    <li><Link className='li' to="/basket">BASKET</Link></li>
                    <li><Link className='li' to="/frontend/src/pages/Detail">DETAIL</Link></li>
                </div>
                <input type="text" placeholder="Search by Name" value={searchValue} onChange={handleSearch} />
                <div className='web'>
                    <div className='user'><HiOutlineUserCircle /></div>
                    <div className='basket'><BsBasket3 /></div>    
                </div>    
            </div>
        </nav>
    );
};

export default Navbar;
