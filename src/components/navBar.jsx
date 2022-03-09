import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="navBar">
      <img src="/img/amondz_logo.png" alt="아몬즈로고" className="navBar-logo" />
      <ul>
        <li>
          <Link to="/add/product">상품 등록</Link>
        </li>
        <li>
          <Link to="/">상품 리스트</Link>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
