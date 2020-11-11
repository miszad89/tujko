import React from "react"
import Layout from "../components/layout"
import Article from "../components/article"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(props => <Link {...props} />)`
text-shadow: none;
margin-bottom: 20rem;
`
const ContactPage = () => (
  <Layout>
    <Article>
      <h2>404</h2>
      <h3>Strona nie istnieje</h3>
      <StyledLink to="/">Powrót do strony głównej</StyledLink>
    </Article>
  </Layout>
)

export default ContactPage
