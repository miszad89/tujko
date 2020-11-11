import React from "react"
import styled from "styled-components"

const StyledWrapper = styled.div`
  padding: 3rem 2rem;
  max-width: 728px;
  min-height: 70vh;
  margin: 0 auto 0;
`
const Article = ({ children }) => <StyledWrapper>{children}</StyledWrapper>

export default Article
