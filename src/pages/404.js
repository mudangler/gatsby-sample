import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({location}) => {
  return (
    <Layout>
      <Seo pageTitle={"ページが見つかりません"} pagePath={location.pathname}/>
      <h1 style={{padding: "20vh 0", textAlign: "center"}}>お探しのページが見つかりませんでした</h1>
    </Layout>
  )
}

export default NotFoundPage
