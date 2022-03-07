import React from 'react';

const NavBar = () => {
  return (
    <header className="navBar">
      <img src="img/amondz_logo.png" alt="아몬즈로고" className='navBar-logo'/>
      <ul>
        <li>
          상품 리스트
        </li>
        <li>
          상품 등록
        </li>
      </ul>
    </header>  
  );
}

export default NavBar;