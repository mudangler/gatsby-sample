import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage,GatsbyImage } from "gatsby-plugin-image"
import { graphql,Link } from 'gatsby'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

export const Head = ({location,pageContext}) => (
    <Seo pageTitle={`CATEGORY: ${pageContext.catName}`} pageDesc={`「${pageContext.catName}」カテゴリーの記事です`} pagePath={location.pathname} />
)

const CategoryPage = ({data, pageContext }) => {
    return (
        <Layout>
            <section className="content bloglist">
                <div className="container">
                    <h1 className="bar">CATEGORY: {pageContext.catName}</h1>
                    { data ?
                    (<div className="posts">
                        {data.allContentfulBlogPost.edges.map(({node}) => (
                            <article className="post" key={node.id}>
                                <Link to={`/blog/post/${node.slug}/`}>
                                    <figure>
                                    <GatsbyImage
                                        image={node.eyecatch.gatsbyImageData}
                                        alt={node.eyecatch.description}
                                        style={{ height: "100%" }}
                                    />
                                    </figure>
                                    <h3>{node.title}</h3>
                                </Link>
                            </article>
                        ))}
                    </div>) : <p>{pageContext.catid}</p>}
                    <ul className="pagenation">
                    {!pageContext.isFirst && (
                        <li className="prev">
                            <Link
                                to={
                                    pageContext.currentPage === 2
                                    ? `/cat/${pageContext.catSlug}/`
                                    : `/cat/${pageContext.catSlug}/${pageContext.currentPage - 1}/`
                                }
                                rel="prev">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                <span>前のページ</span>
                            </Link>
                        </li>)}
                    {!pageContext.isLast && (
                        <li className="next">
                            <Link
                                to={`/cat/${pageContext.catSlug}/${pageContext.currentPage + 1}/`
                                } rel="next">
                                    <span>次のページ</span>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </li>)}
                    </ul>
                </div>
            </section>
        </Layout>
    )
}

export default CategoryPage

export const query = graphql`
    query( $catId: String!, $skip: Int!, $limit: Int!) {
        allContentfulBlogPost(
            sort: {order: DESC, fields: publishDate}
            skip:$skip
            limit:$limit
            filter: {category: {elemMatch: {id: {eq:  $catId}}}}
        ) {
            edges {
                node {
                    title
                    id
                    eyecatch {
                        gatsbyImageData(width:500, layout: CONSTRAINED)
                        description
                    }
                    slug
                }
            }
        }
    }
`
