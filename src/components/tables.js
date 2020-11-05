import React from "react"
import PricesData from "../data/pricesData"

const TableHead = item => (
  <thead>
    <tr>
      {item.thead.map(i => (
        <td>{i}</td>
      ))}
    </tr>
  </thead>
)
const TableBody = item => (
  <tbody>
    {item.tbody.map(row => (
      <tr>
        {row.map(i => (
          <td>{i}</td>
        ))}
      </tr>
    ))}
  </tbody>
)
const Tables = () => (
  <>
    {PricesData.map(item => (
      <>
        <h3>{item.title}</h3>
        <table>
          {TableHead(item)}
          {TableBody(item)}
        </table>
      </>
    ))}
  </>
)

export default Tables
