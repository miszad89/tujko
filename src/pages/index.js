import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Article from "../components/article.js"

const StyledHeader = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
  margin: 3rem 2rem 0;
`
const HomePage = () => (
  <Layout>
    <Hero />
    <StyledHeader>
      TUJKO S.C. - specjalistyczny zakład naprawy felg. <br /> Ponad 90 lat
      doświadczenia.
    </StyledHeader>
    <Article>
      <h2>O nas</h2>
      <p>
        Naprawiamy koła samochodów osobowych i dostawczych, motocykli oraz
        quadów. Prowadzimy sprzedaż ogumienia, felg nowych i używanych oraz śrub
        i zabezpieczeń do kół. Oferujemy również usługi wulkanizacyjne,
        wyważanie kół z optymalizacją geometryczną, sezonowe przechowywanie kół,
        regeneracja otworów, piaskowanie, poszerzanie, malowanie polerowanie
        felg oraz sezonowe przechowywanie kół.
      </p>
    </Article>
  </Layout>
)

export default HomePage
