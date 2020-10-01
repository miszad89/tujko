import React from "react"
import styled from "styled-components"

const currentYear = new Date().getFullYear()
const StyledWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding: 1rem;
`
const footer = () => (
    <StyledWrapper>
        <p>Tujko  © {currentYear}</p>
    </StyledWrapper>
)

export default footer