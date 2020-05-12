import React from 'react';
import { Page } from '../../components/Page';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { ImageBanner } from '../../components/ImageBanner';
import { Content } from '../../components/Content';
import { List } from '../../components/List';
import { Footer } from '../../components/Footer';
import cuttlefish14 from '../../images/cuttlefish_14.jpg';

const image = {
	src: cuttlefish14,
	alt: 'cuttlefish'
}
const detailsList = [
	{ name: 'Scientific Name', content: 'Sepia officinalis' },
	{ name: 'Habitat', content: 'Shallow reefs and marine channels' },
	{ name: 'Location', content: 'Globally distributed in marine waters (though not near America)' },
	{ name: 'Diet', content: 'Mollusks and crustaceans, especially shrimp and crab' },
	{ name: 'Average Lifespan in the Wild', content: '1-2 years' },
	{ name: 'Size', content: '8-36 inches' },
	{ name: 'Weight', content: 'About 11 pounds' },
]

export default function Specifics() {
	const heading = 'Specifics';
	return (
		<Page>
			<SEO
				title='Specifics'
				description='Specific information about the cuttlefish.'
			/>
			<Header>
				<NavBar />
				<ImageBanner bannerImage={image} heading={heading} />
			</ Header>
			<Content>
				<List listItems={detailsList} />
			</Content>
			<Footer />
		</Page>
	)
}