import React from 'react';
import { Page } from '../../components/Page';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/Banner';
import { Content } from '../../components/Content';
import { List } from '../../components/List';
import { Gallery } from '../../components/Gallery';
import { Footer } from '../../components/Footer';
import styles from './styles.module.css';
import cuttlefishCamouflage from '../../images/camouflaged_cuttlefish_1.jpg';
import cuttlefishTentacles from '../../images/cuttlefish_2.jpg';
import cuttlefishBeak from '../../images/cuttlefish_10.jpg';
import cuttlebone from '../../images/cuttlebone.jpg';
import cuttlefishEye from '../../images/cuttlefish_eye.jpg';

const adaptationsList = [
	{ name: 'Camouflage', content: 'Cuttlefish have a highly specialized skin that allows them to easily change color.  This is probably one of the cuttlefish\'s more widely known adaptions.  The way it works is that muscles with different pigments expand or contract to display colors.  Cuttlefish also have the capability of changing shape.' },
	{ name: 'Propulsion', content: 'Each cuttlefish has a pair of undulating fins that span the length of their body and help the creature to swim and maneuver; for any quick movements, it propels itself by shooting water from its gut.' },
	{ name: 'Fast Tongue', content: 'Cuttlefish have extremely fast tongues that shoot out to grab prey and pull them quickly back to a beak and tentacles.' },
	{ name: 'Tentacles', content: 'Cuttlefish have eight tentacles with suction cups that allow them to grasp prey.  Cuttlefish also have two longer tentacles, with a single suction cup at each tip.  They use these elongated arms to grab their prey.' },
	{ name: 'Beak', content: 'In the middle of eight forward-reaching tentacles, there is a small beak which cuttlefish use to break open the shells of mollusks, crabs, and other crustaceans.' },
	{ name: 'Cuttlebone', content: 'The cuttlebone is found in all cuttlefish and contains gasses that make it float, allowing it to swim.' },
	{ name: 'Good Eyesight', content: 'Cuttlefish have really good eyesight.  This allows them to accurately use their camouflage and spot prey easily.' },

]
const images = [
	{ src: cuttlefishCamouflage, alt: 'cuttlefish camouglage', caption: 'Cuttlefish Camouflage' },
	{ src: cuttlefishTentacles, alt: 'cuttlefish tentacles', caption: 'Cuttlefish Tentacles' },
	{ src: cuttlefishBeak, alt: 'cuttlefish beak', caption: 'Cuttlefish Beak' },
	{ src: cuttlebone, alt: 'cuttlebone', caption: 'Cuttlebone' },
	{ src: cuttlefishEye, alt: 'cuttlefish eye', caption: 'Cuttlefish Eye' },
]

export default function StructuralAdaptations() {
	const bannerContent = {
		heading: 'Structural Adaptations'
	}
	return (
		<Page>
			<SEO
				title='Structural Adaptations'
				description='Camouflage, Propulsion, Fast Tongue, Tentacles, Beak, Cuttlebone, Good Eyesight.  Click for more!'
				keywords='cuttlefish, adaptations, structural, Camouflage, Propulsion, Fast Tongue, Tentacles, Beak, Cuttlebone, Good Eyesight'
				image={cuttlefishCamouflage}
			/>
			<Header>
				<NavBar />
				<Banner bannerContent={bannerContent} />
			</ Header>
			<Content>
				<List listItems={adaptationsList} />
				<div className={styles.youtubeIframeWrapper}>
					<iframe
						src='https://www.youtube.com/embed/Xl6GiUdl-s8'
						frameBorder='0'
						allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
						title='cuttlefish video'
						className={styles.youtubeIframe}
					>
					</iframe>
				</div>
				<Gallery images={images} />
			</Content>
			<Footer />
		</Page>
	)
}