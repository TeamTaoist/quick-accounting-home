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
    href: "/",
  },
  {
    name: "Feature",
    href: "/feature",
  },
  {
    name: "Benefits",
    href: "/benefits",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  const userButtonRef = useRef<any>(null);
  const [showNavDropdown, setShowNavDropdown] = useState<boolean>(false);

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
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <NavList>
          {navList.map((item, i) => (
            <NavLinks to={item.href} key={i}>
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
            <DropdownLink to={item.href} key={i}>
              {item.name}
            </DropdownLink>
          ))}
        </NavListDropdown>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
