import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const StyledList = styled.ul`
  font-weight: 700;
  list-style: none;
  margin: 1rem 0;
  ${({ theme }) => theme.media.desktop} {
    display: flex;
    flex-direction: row;
    margin: 0 1rem;
  }
`
const styledLinkStyle = css`
  color: ${({ theme }) => theme.colors.light};
  text-align: center;
  text-shadow: none;
  background-image: none;
  display: block;
  width: 90%;
  margin: 0 auto 0;
  padding: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 1rem;
  }
  ${({ theme }) => theme.media.desktop} {
    width: 100%;
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
