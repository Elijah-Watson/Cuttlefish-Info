import React from 'react';
import { Page } from '../../components/Page';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/Banner';
import { Content } from '../../components/Content';
import { List } from '../../components/List';
import { Footer } from '../../components/Footer';
import styles from './styles.module.css';
import cuttlefishSprayingInk from '../../images/cuttlefish_spraying_ink.jpg';

const adaptationsList = [
	{ name: 'Ink', content: 'Cuttlefish produce ink that they can spray as a kind of "smoke screen" to escape from predators when their camouflage fails.' },
	{ name: 'Poisonous Flesh (Flamboyant Cuttlefish)', content: 'The flamboyant cuttlefish has poisonous flesh, so potential predators think twice about trying to eat it.' },
]

export default function PhysiologicalAdaptations() {
	const bannerContent = {
		heading: 'Physiological Adaptations'
	}
	return (
		<Page>
			<SEO
				title='Physiological Adaptations'
				description='Ink, Poisonous Flesh.  Click for more!'
				keywords='cuttlefish, adaptations, physiological, ink, poison, poisonous, flesh'
				image={cuttlefishSprayingInk}
			/>
			<Header>
				<NavBar />
				<Banner bannerContent={bannerContent} />
			</ Header>
			<Content>
				<List listItems={adaptationsList} />
				<figure className={styles.imageWrapper}>
					<img src={cuttlefishSprayingInk} alt='flamboyant cuttlefish' className={styles.image} />
					<figcaption className={styles.caption} >Cuttlefish Spraying Ink</figcaption>
				</figure>
			</Content>
			<Footer />
		</Page>
	)
}