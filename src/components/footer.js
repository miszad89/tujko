import React from "react"
import styled from "styled-components"

const currentYear = new Date().getFullYear()
const StyledWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.primary};
 */
`
const StyledHeader = styled.h2`
  margin: 1rem;
`
const Footer = () => (
  <StyledWrapper>
    <StyledHeader>Tujko © {currentYear}</StyledHeader>
  </StyledWrapper>
)

export default Footer
