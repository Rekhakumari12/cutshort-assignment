import React from 'react';
import { ReactComponent as Logo } from "../assets/logo.svg";
const Header = () => {
  return (
    <div className="flex justify-center items-center" id="logo">
      <Logo />
      <h1 className="text-2xl font-bold pl-2">Eden</h1>
    </div>
  );
}

export default Header;
