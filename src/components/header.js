import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import posed from "react-pose"
import Menu from "./menu"
import Logo from "./logo"
import Hamburger from "./hamburger"

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
const PosedDiv = posed.div({
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: 'easeOut', duration: 300 }
  },
  hidden: {
    x: "-100%",
    opacity: 0,
  },
})
const MenuWrapper = styled(PosedDiv)`
  align-self: flex-start;
  background: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 5rem;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
`
class Header extends Component {
  state = {
    visible: false,
  }
  toggleMenu = () => {
    this.setState(prevState => ({ visible: !prevState.visible }))
  }
  render() {
    return (
      <StyledWrapper>
        <LogoWrapper as={Link} to="/">
          <Logo />
        </LogoWrapper>
        <Nav>
          <Hamburger onClick={this.toggleMenu} />
          <MenuWrapper
            pose={this.state.visible ? "visible" : "hidden"}
            onClick={this.toggleMenu}
          >
            <Menu />
          </MenuWrapper>
        </Nav>
      </StyledWrapper>
    )
  }
}

export default Header
