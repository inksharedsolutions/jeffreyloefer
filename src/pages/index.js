import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "../components/banner"
import Author from "../components/author"
import Book from "../components/featured-book"
import Newsletter from "../components/newsletter"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Slider />
    <Author />
    <Book />
    <Newsletter />
    <Footer />
    
  </Layout>
)

export default IndexPage
