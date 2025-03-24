import React from 'react';
import styled from 'styled-components';
import { FaHome, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 24px;
  color: green;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  li {
    margin-left: 20px;

    a {
      text-decoration: none;
      color: #333;
      font-size: 16px;
      display: flex;
      align-items: center;

      &:hover {
        color: green;
      }

      svg {
        margin-right: 8px;
      }
    }
  }
`;

const Navbar: React.FC = () => {
  return (
    <NavbarContainer className="navbar">
      <Logo>Gis Barkat</Logo>
      <NavLinks>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;