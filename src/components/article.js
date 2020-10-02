import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 3rem 2rem;
`
const Article = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Article
