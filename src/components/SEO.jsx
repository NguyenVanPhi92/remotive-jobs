import Head from 'next/head'

const SEO = ({ title, description, image, url, keywords, author }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name='title' content={title} />
            <meta name='author' content={author} />
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords.join(', ')} />
            <link rel='canonical' href={url} />
            {/* Open Graph / Facebook */}
            <meta property='og:type' content='website' />
            <meta property='og:url' content={url} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:image' content={image} />
            <meta property='og:site_name' content={title} />
            {/* Twitter */}
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={url} />
            <meta property='twitter:title' content={title} />
            <meta property='twitter:description' content={description} />
            <meta property='twitter:image' content={image} />
        </Head>
    )
}

export default SEO
