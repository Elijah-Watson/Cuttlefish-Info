import React from 'react';
import { Page } from '../../components/Page';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/Banner';
import { Content } from '../../components/Content';
import { Footer } from '../../components/Footer';
import styles from './styles.module.css';

const factsList = [
	'Cephalopods are considered one of the most intelligent animals in the sea, and their cognitive abilities have been widely studied. Social learning in cuttlefish has been documented, and cuttlefish have even been trained in a lab to swim through T-shaped mazes.',
	'The cuttlefish\'s skull, called its cuttlebone, washes up on shore when the cuttlefish dies.  These cuttlebones are collected by people and sold as a calcium supplement treat for domesticated birds.',
	'The flamboyant cuttlefish is the only poisonous cuttlefish and is one of the very few cephalopods that are poisonous; along with the blue-ringed octopus and the striped pyjama squid.',
	'Not much is known of the poisonous flesh of the flamboyant cuttlefish.  It could possibly be researched for medical uses.',
	'The flamboyant cuttlefish walks on the ocean floor most of the time instead of swimming.',
	'Cuttlefish die soon after mating.',
	'Despite the name, cuttlefish are neither cuddly nor fish.  The word "cuttle" actually comes from their cuttlebone.  The word "fish" is deceiving, it was probably used just because it swam and sounded better than a "cuttlecephalopod."',
]

export function InterestingFacts() {
	const bannerContent = {
		heading: 'Interesting Facts'
	}
	return (
		<Page>
			<SEO 
				title='Interesting Facts'
				description='Some interesting facts about cuttlefish!'
			/>
			<Header>
				<NavBar />
				<Banner bannerContent={bannerContent} />
			</ Header>
			<Content >
				<ol className={styles.list} >
					{
						factsList.map(fact => <li key={fact} className={styles.item}>{fact}</li>)
					}
				</ol>
			</Content>
			<Footer />
		</Page>
	)
}