import React from "react"
import styled from "styled-components"
import Article from "../components/article"

const articleTitle = "O nas"
const articleText =
  "Naprawiamy koła samochodów osobowych i dostawczych, motocykli oraz quadów. Prowadzimy sprzedaż ogumienia, felg nowych i używanych oraz śrub i zabezpieczeń do kół. Oferujemy również usługi wulkanizacyjne, wyważanie kół z optymalizacją geometryczną, sezonowe przechowywanie kół, regeneracja otworów, piaskowanie, poszerzanie, malowanie polerowanie felg oraz sezonowe przechowywanie kół."
  const StyledHeader = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
`
const StyledWrapper = styled.div`
  padding: 3rem 2rem;
`
const about = () => (
  <StyledWrapper>
    <StyledHeader>
      TUJKO S.C. - specjalistyczny zakład naprawy felg. <br /> Ponad 90 lat
      doświadczenia.
    </StyledHeader>
    <Article title={`${articleTitle}`} text={`${articleText}`} />
  </StyledWrapper>
)

export default about
