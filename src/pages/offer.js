import React from "react"
import Layout from "../components/layout"
import Article from "../components/article"
import Section from "../components/section"
import OfferData from "../data/offerData"

const OfferPage = () => (
  <Layout>
    <Article>
      <h2>Oferta</h2>
      {OfferData.map(i => (
        <Section
          key={i.id}
          title={i.title}
          text={i.text}
        />
      ))}
    </Article>
  </Layout>
)

export default OfferPage
