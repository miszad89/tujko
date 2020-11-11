import React from "react"
import styled, { css } from "styled-components"

const lineThickness = `0.15rem`
const lineColor = ({ theme }) => theme.colors.light
const lineStyle = css`
  position: absolute;
  width: 100%;
  height: ${lineThickness};
  background-color: ${lineColor};
  left: 0;
`
const HamburgerButton = styled.button`
  background-color: transparent;
  border: ${lineThickness} solid ${lineColor};
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`
const HamburgerBox = styled.span`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
`
const HamburgerInner = styled.span`
  ${lineStyle};
  top: calc(50% - (${lineThickness} / 2));
  &:before {
    content: "";
    ${lineStyle};
    top: -0.6rem;
  }
  &:after {
    content: "";
    ${lineStyle};
    top: 0.6rem;
  }
`
const Hamburger = (props) => (
  <HamburgerButton onClick={props.onClick}>
    <HamburgerBox>
      <HamburgerInner />
    </HamburgerBox>
  </HamburgerButton>
)

export default Hamburger
