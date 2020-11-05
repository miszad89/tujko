import React from "react"
import Article from "../components/article"
import Layout from "../components/layout"
import Tables from "../components/tables"

const PricesPage = () => (
    <Layout>
        <Article>
            <h2>Cennik</h2>
            <h3>Ceny brutto za 1 szt.</h3>
            <h3>Sprawdzenie kół - 0 zł</h3>
            <p>Odkręcenie kół, nasza ocena nieprawidłowości, montaż tych samych kół w te same miejsca.</p>
            <Tables />
        </Article>
    </Layout>
)

export default PricesPage