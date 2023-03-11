import { useState } from 'react';
import { SmoothScroll } from '../../../../components/SmoothScroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../../assets/images/logo.png';

import './styles.css';

export function Navbar() {
  const [openItems, setOpenItems] = useState(false);

  const toggleOpenItens = () => setOpenItems((prevState) => !prevState);

  // You pass id for navigation.
  // in component u pass id and ref him using anchor tag

  return (
    <div className="header">
      <nav className="navbar">
        <SmoothScroll to="hero" duration={350}>
          <img src={logo} alt="logo" className="logo" />
        </SmoothScroll>
        <div className="hamburger" onClick={toggleOpenItens}>
          {openItems ? (
            <FaTimes size={30} style={{ color: '#ffffff' }} />
          ) : (
            <FaBars size={30} style={{ color: '#ffffff' }} />
          )}
        </div>
        <ul className={openItems ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <SmoothScroll to="hero" offset={-100} onClick={toggleOpenItens}>
              Home
            </SmoothScroll>
          </li>
          <li className="nav-item">
            <SmoothScroll to="about" offset={50} onClick={toggleOpenItens}>
              About
            </SmoothScroll>
          </li>
          <li className="nav-item">
            <SmoothScroll
              to="testimonials"
              offset={50}
              onClick={toggleOpenItens}
            >
              Testimonials
            </SmoothScroll>
          </li>
          <li className="nav-item">
            <SmoothScroll to="demo" offset={50} onClick={toggleOpenItens}>
              Demo
            </SmoothScroll>
          </li>
        </ul>
      </nav>
    </div>
  );
}
