import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  text-align: center;
  padding: 1rem;
`
const StyledButton = styled.button`
  background: ${({theme}) => theme.colors.dark};
`
const Section = (props) => (
  <StyledWrapper>
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <StyledButton>Zobacz pełen cennik</StyledButton>
  </StyledWrapper>
)

export default Section
