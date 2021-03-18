import React from 'react';
import 'src/components/logo/logo.sass';

const logo = 'https://images-na.ssl-images-amazon.com/'
  + 'images/I/41VnFKC9srL._SX346_BO1,204,203,200_.jpg';

const Logo = () => (
  <div className="logo">
    <img
      src={logo}
      className="img-fluid logo-img"
      alt="book-cover-moby-dick"
    />
  </div>
);

export default Logo;
