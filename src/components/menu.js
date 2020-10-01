import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const StyledList = styled.ul`
  font-weight: 700;
  list-style: none;
  margin: 1rem 0;
  display: none;
`
const styledLinkStyle = css`
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
  text-shadow: none;
  background-image: none;
  display: block;
  width: 100%;
  padding: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`
const StyledLink = styled(props => <Link {...props} />)`
  ${styledLinkStyle};
`
const StyledListItem = styled.li`
  margin: 0;
`
const MenuLink = props => (
  <StyledListItem>
    <StyledLink to={props.to}>{props.children}</StyledLink>
  </StyledListItem>
)
const Menu = () => (
  <StyledList>
    <MenuLink to="/">O nas</MenuLink>
    <MenuLink to="/offer/">Oferta</MenuLink>
    <MenuLink to="/contact/">Kontakt</MenuLink>
  </StyledList>
)

export default Menu
