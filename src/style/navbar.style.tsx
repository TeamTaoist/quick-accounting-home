import styled from "styled-components";

export const NavbarContainer = styled.div`
  background: linear-gradient(274deg, #5d98ae 100%, #a9cedb 0%);
  height: 72px;
  display: flex;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 1;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding-inline: 5%;
  }
`;
export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  button {
    border: none;
    outline: none;
    background: var(--text-primary);
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 16px;
    color: var(--text-secondary);
    cursor: pointer;
    a {
      text-decoration: none;
      color: var(--text-secondary);
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.div`
  img {
    width: 120px;
    cursor: pointer;
  }
`;
export const NavLinks = styled.li`
  list-style: none;
  color: var(--text-primary);
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: var(--text-secondary);
  }
`;
export const MobileNavMenu = styled.div`
  display: none;
  img {
    width: 16px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
export const NavListDropdown = styled.ul`
  position: absolute;
  right: 30px;
  top: 60px;
  display: none;
  line-height: 20px;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const DropdownLink = styled.li`
  list-style: none;
  font-size: 12px;
  color: var(--text-gray);
  display: none;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #1e3796;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
