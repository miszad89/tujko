import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledWrapper = styled.div`
  border: 0.25rem solid ${({ theme }) => theme.colors.dark};
  border-radius: 2rem;
  text-align: center;
  padding: 2rem;
  margin: 3rem;
`
const StyledButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  padding: 0.5rem;
  margin: 2rem;
  border-radius: 3rem;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
const StyledLink = styled(props => <Link {...props} />)`
  background-image: none;
`
const Section = props => (
  <StyledWrapper>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <StyledLink to="/pricelist/" tabindex="-1">
      <StyledButton>Zobacz pełen cennik</StyledButton>
    </StyledLink>
  </StyledWrapper>
)

export default Section
