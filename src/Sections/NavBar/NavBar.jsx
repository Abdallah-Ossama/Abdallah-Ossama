import "./NavBar.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [menuClass, setMenuClass] = useState("hide-menu");
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleScroll = () => {
    if (window.scrollY >= 0 && window.scrollY <= 500) {
      setActiveNavItem("section1")
    }
    if (window.scrollY >= 400 && window.scrollY <= 1200) {
      setActiveNavItem("section2")
    }
    if (window.scrollY >= 1200 && window.scrollY <= 1800) {
      setActiveNavItem("section3")
    }
    if (window.scrollY >= 1800 && window.scrollY <= 2400) {
      setActiveNavItem("section4")
    }
    if (window.scrollY >= 2400 && window.scrollY <= 3500) {
      setActiveNavItem("section5")
    }
    if (window.scrollY >= 3500 && window.scrollY <= 4000) {
      setActiveNavItem("section6")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const burgerMenu = () => {
    if (menuClass === "hide-menu") {
      setMenuClass("show-menu");
    } else if (menuClass === "show-menu") {
      setMenuClass("hide-menu");
    }
  };

  return (
    <header id="Navbar">
      <menu className={menuClass}>
        <ul>
          <li><a className={activeNavItem === 'section1' ? 'navbar-item-active' : 'navbar-item'} href="#Hero">Home</a></li>
          <li><a className={activeNavItem === 'section2' ? 'navbar-item-active' : 'navbar-item'} href="#About">About</a></li>
          <li><a className={activeNavItem === 'section3' ? 'navbar-item-active' : 'navbar-item'} href="#services">Services</a></li>
          <li><a className={activeNavItem === 'section4' ? 'navbar-item-active' : 'navbar-item'} href="#skills">Skills</a></li>
          <li><a className={activeNavItem === 'section5' ? 'navbar-item-active' : 'navbar-item'} href="#projects">Projects</a></li>
          <li><a className={activeNavItem === 'section6' ? 'navbar-item-active' : 'navbar-item'} href="#contact">Contact</a></li>
        </ul>
      </menu>

        <h2><a href="#About">Abdallah</a></h2>
        <nav>
          <div id="menu-icon" onClick={burgerMenu}>
            <div id="div1"></div>
            <div></div>
            <div></div>
          </div>

        <ul>
          <li><a className={activeNavItem === 'section1' ? 'navbar-item-active' : 'navbar-item'} href="#Hero">Home</a></li>
          <li><a className={activeNavItem === 'section2' ? 'navbar-item-active' : 'navbar-item'} href="#About">About</a></li>
          <li><a className={activeNavItem === 'section3' ? 'navbar-item-active' : 'navbar-item'} href="#services">Services</a></li>
          <li><a className={activeNavItem === 'section4' ? 'navbar-item-active' : 'navbar-item'} href="#skills">Skills</a></li>
          <li><a className={activeNavItem === 'section5' ? 'navbar-item-active' : 'navbar-item'} href="#projects">Projects</a></li>
          <li><a className={activeNavItem === 'section6' ? 'navbar-item-active' : 'navbar-item'} href="#contact">Contact</a></li>
        </ul>       
        </nav>
    </header>
  );
};

export default NavBar;