import React from 'react';
import { Helmet } from 'react-helmet';
import cuttlefish1 from '../../images/cuttlefish_1.jpg';

interface SEOProps {
	title?: string;
	description?: string;
	keywords?: string;
	image?: string;
}

export function SEO({ title, description, keywords, image }: SEOProps) {
	const siteUrl = 'https://cuttlefish-info.com';
	const titleTemplate = 'Cuttlefish: %s';
	const seo = {
		title: title || 'Info',
		description: description || 'This website has all the information you will need to know about cuttlefish (except how to cook and eat them).  This site has general information, adaptation information, interesting facts, lots of pictures, videos, and helpful sources.  Enjoy!',
		keywords: keywords || 'cuttlefish, cuttlefish adaptations, behavorial adaptations, cuttlefish structural adaptations, cuttlefish structure adaptations, cuttlefish interesting facts, cuttlefish pictures, cuttlefish video, cuttlefish report, cuttlefish information, cephalopoda',
		image: `${siteUrl}${image || cuttlefish1}`
	}
	return (
		<Helmet title={seo.title} titleTemplate={titleTemplate} defer={false} >
			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />
			<meta name='keywords' content={seo.keywords} />
		</Helmet>
	)
}