import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.header`
  position: relative;
  height: 80px;
  background-color: black;
  @media all and (max-width: 600px) {
    height: 50px;;
  }
`;

const Logo = styled.div`
  /* height: 10px; */
  position: absolute;
  left: 40px;
  margin: 10px;

  @media all and (max-width: 600px) {
    display: none;
  }
`;

const ResourceLinks = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 300;
  position: absolute;
  right: 40px;
  top: 24px;
  @media all and (max-width: 600px) {
    left: 25%;
  top: 25%;
  }
  
`;

const A = styled.a`
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  margin-left: 30px;
  font-size: 25px;
  @media all and (max-width: 600px) {
    font-size:14px;
  }
`;
export default function Navbar() {
  return (
    <>
      <NavbarWrapper>
        <Logo>
          <img src="https://i.imgur.com/WUtsRM9b.jpg" alt="" height="60px" />
        </Logo>
        <ResourceLinks>
          <A>About Us</A>
          <A>Login</A>
          <A>FAQ</A>
        </ResourceLinks>
      </NavbarWrapper>
    </>
  );
}
