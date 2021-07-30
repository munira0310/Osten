import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.svg';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Slide from 'react-reveal/Slide';
import './Header.css';
const data = [
  { to: '/', title: 'Home' },
  { to: '/about', title: 'About' },
  { to: '/production', title: 'Production' },
  { to: '/services', title: 'Services' },
  { to: '/products', title: 'Products' },
  { to: '/constructor', title: 'Constructor' },
  { to: '/news', title: 'News' },
  { to: '/contacts', title: 'Contacts' },
];
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { showNav: false };
  onClickBars = () => {
    this.setState((state) => {
      return { showNav: !state.showNav };
    });
  };
  render() {
    return (
      <div className=" Header Container-fluid shadow ">
        <div className="container d-flex justify-content-between py-4 ">
          <Link to="/home">
            <img src={Logo} className="logo" alt="" />
          </Link>
          <div className={ ` media ${(this.state.showNav && ' d-flex') || ''}  `}>
            {data.map((v, i) => {
              return (
                <Slide  right duration={400*i}>
                <Link key={v.title} className="text-warning mx-2 mt-2" to={v.to}>
                  {v.title}
                </Link>
                </Slide>
              );
            })}
          </div>
          <div className="d-md-none d-block">
            <div
              onClick={this.onClickBars}
              className={`${(!this.state.showNav && 'd-block') || 'd-none'}`}
            >
                <FaBars />
            </div>
            <div
              onClick={this.onClickBars}
              className={`${(!this.state.showNav && 'd-none') || 'd-block'}`}
            >
            <FaTimes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;