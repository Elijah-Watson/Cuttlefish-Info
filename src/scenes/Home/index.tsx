import React from 'react';
import { useHistory } from 'react-router-dom';
import { Page } from '../../components/Page';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/Banner';
import { Button } from '../../components/Button';
import { Content } from '../../components/Content';
import { Gallery } from '../../components/Gallery';
import { Footer } from '../../components/Footer';
import cuttlefishImages from '../../image-collections/all-cuttlefish';
import cuttlefish1 from '../../images/cuttlefish_1.jpg';
import { Image } from '../../types';

const image = {
	src: cuttlefish1,
	alt: 'cuttlefish'
}

export function Home() {
	const history = useHistory();
	const clickHandler = () => {
		history.push('/specifics');
	}
	const bannerContent = {
		heading: 'Cuttlefish',
		text: `
			Cuttlefish are marine animals of the order Sepiida. 
			They belong to the class Cephalopoda, which also includes squid, octopuses, and nautiluses. 
			'Cuttle' is a reference to their unique internal shell, the cuttlebone. 
			Despite their name, cuttlefish are not fish but mollusks. 
			`,
		button: <Button buttonText={'Learn More'} clickHandler={clickHandler} />
	}
	const images: Image[] = cuttlefishImages.map(image => ({
		src: image.src,
		alt: image.alt
	}))
	return (
		<Page>
			<SEO
				title='Home'
				description={'Cuttlefish are marine animals of the order Sepiida. They belong to the class Cephalopoda, which also includes squid, octopuses, and nautiluses. \'Cuttle\' is a reference to their unique internal shell, the cuttlebone.'}
				keywords='cuttlefish, adaptations, Sepiida, cuttle, cuddle, fish, structural, behavioral, physiological, interesting'
				image={cuttlefish1}
			/>
			<Header>
				<NavBar />
				<Banner bannerImage={image} bannerContent={bannerContent} />
			</ Header>
			<Content>
				<Gallery images={images} />
			</Content>
			<Footer />
		</Page>
	)
}