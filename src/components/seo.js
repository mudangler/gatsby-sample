import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Seo = (props, children) => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
                lang
                description
                siteUrl
                fbappid
                locale
            }
        }
    }`)

    const title =  props.pageTitle ? props.pageTitle + " | " + data.site.siteMetadata.title : data.site.siteMetadata.title;

    const description = props.pageDesc || data.site.siteMetadata.description;

    const url = props.pagePath ? data.site.siteMetadata.siteUrl + props.pagePath : data.site.siteMetadata.siteUrl

    const imgUrl = props.pageImg ? data.site.siteMetadata.siteUrl + props.pageImg :props.blogImg || data.site.siteMetadata.siteUrl + `/thumb.jpg`

    const imgW = props.pageImgW || 1280;
    const imgH = props.pageImgH || 640;

    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            <meta property="og:site_name" content={data.site.siteMetadata.title} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content={data.site.siteMetadata.locale} />
            <meta property="fb:app_id" content={data.site.siteMetadata.fbappid} />
            <meta property="og:image" content={imgUrl} />
            <meta property="og:image:width" content={imgW} />
            <meta property="og:image:height" content={imgH} />
            <meta name="twitter:card" content="summary_large_image" />
            {children}
        </>
    )
}

export default Seo
