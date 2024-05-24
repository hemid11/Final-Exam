import React, { useState } from 'react';
import {Helmet} from "react-helmet";
const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
  };


  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== product.id);
    setWishlistItems(updatedWishlist);
  };

  return (
    <div>
      <Helmet>
                <title>Wishlist</title>
            </Helmet>
      <h1>Wishlist</h1>
      <ul>
        {wishlistItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}$
            <button onClick={() => removeFromWishlist(item)}>Sil</button>
          </li>
        ))}
      </ul>
      <p>Wishlist-də {wishlistItems.length} məhsul var.</p>
    </div>
  );
};

export default WishlistPage;
