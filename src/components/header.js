import React from "react"
import styled from "styled-components"
import Menu from "./menu"
import Logo from "./logo"
import Hamburger from "./hamburger"

const isMenuOpen = false;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
`
const LogoWrapper = styled.div`
  height: 3rem;
  width: 6rem;
`
const Nav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`
const MenuWrapper = styled.div`
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 5rem;
  right: 0;
  height: 100vh;
  width: 67%;
  z-index: 1;
  transform: ${isMenuOpen ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.5s 0.1s;
`
const Header = () => (
  <StyledWrapper>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <Nav>
      <Hamburger />
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
    </Nav>
  </StyledWrapper>
)

export default Header
