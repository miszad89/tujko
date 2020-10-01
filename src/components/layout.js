import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme } from "../utils/theme"
import Header from "../components/header"
import Footer from "../components/footer"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
  }
  *, *::before, *::after {
    box-sizing: border-box;
}
`
const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  </ThemeProvider>
)

export default Layout
