import {
  DropdownLink,
  Logo,
  MobileNavMenu,
  Nav,
  NavLinks,
  NavList,
  NavListDropdown,
  NavbarContainer,
} from "../style/navbar.style";
import logo from "../assets/images/logo.svg";
import menu from "../assets/images/menu.svg";
import { useEffect, useRef, useState } from "react";

interface INavList {
  name: string;
  href: string;
}

const navList: INavList[] = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "Feature",
    href: "feature",
  },
  {
    name: "Benefits",
    href: "benefits",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

const Navbar = () => {
  const userButtonRef = useRef<any>(null);
  const [showNavDropdown, setShowNavDropdown] = useState<boolean>(false);
  const [activeNavLink, setActiveNavLink] = useState("home");

  // handle nav scroll
  const handleNavLink = (navLink: string) => {
    setActiveNavLink(navLink);
    const anchor = document.getElementById(navLink);
    if (anchor) {
      const offset = 70;
      const scrollPosition =
        anchor.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  };

  // hide dropdown globally
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (
        showNavDropdown &&
        userButtonRef.current &&
        !userButtonRef.current.contains(e.target)
      ) {
        setShowNavDropdown(false);
      }
    };
    if (showNavDropdown) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [showNavDropdown]);

  return (
    <NavbarContainer>
      <Nav>
        <Logo onClick={() => handleNavLink("home")}>
          <img src={logo} alt="" />
        </Logo>
        <NavList>
          {navList.map((item, i) => (
            <NavLinks
              onClick={() => handleNavLink(item.href)}
              key={i}
              className={activeNavLink === item.href ? "active" : ""}
            >
              {item.name}
            </NavLinks>
          ))}
          <button>
            <a href="https://qa.taoist.dev/">Get Started</a>
          </button>
        </NavList>
        <MobileNavMenu
          onClick={() => setShowNavDropdown(!showNavDropdown)}
          ref={userButtonRef}
        >
          <img src={menu} alt="" />
        </MobileNavMenu>
      </Nav>
      {showNavDropdown && (
        <NavListDropdown>
          {navList.map((item, i) => (
            <DropdownLink
              onClick={() => handleNavLink(item.href)}
              key={i}
              className={activeNavLink === item.href ? "active" : ""}
            >
              {item.name}
            </DropdownLink>
          ))}
        </NavListDropdown>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
