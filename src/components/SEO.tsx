import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import ogImage from '../images/red1200.png'

interface Props {
	pathname?: string
	article?: boolean
}

const SEO = ({ pathname = '/', article = false }: Props) => {
	const data = useStaticQuery(graphql`
		query SeoQuery {
			site {
				siteMetadata {
					name
					title
					siteUrl
					description
					twitter
				}
			}
		}
	`)
	const titleTemplate = `${data.site.siteMetadata.name} – %s`
	const hostname = (path: string) => `${data.site.siteMetadata.siteUrl}${path}`

	return (
		<Helmet
			titleTemplate={titleTemplate}
			htmlAttributes={{
				lang: 'en',
			}}
		>
			<title>{data.site.siteMetadata.title}</title>
			<meta name="description" content={data.site.siteMetadata.description} />
			<meta name="image" content={hostname(ogImage)} />

			<meta property="og:url" content={hostname(pathname)} />
			{(article ? true : null) && <meta property="og:type" content="article" />}
			<meta
				property="og:title"
				content={titleTemplate.replace('%s', data.site.siteMetadata.title)}
			/>
			<meta
				property="og:description"
				content={data.site.siteMetadata.description}
			/>
			<meta property="og:image" content={hostname(ogImage)} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="1200" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={data.site.siteMetadata.twitter} />
			<meta name="twitter:creator" content={data.site.siteMetadata.twitter} />
		</Helmet>
	)
}

export default SEO
