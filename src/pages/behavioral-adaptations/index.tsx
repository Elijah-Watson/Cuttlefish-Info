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
import flamboyantCuttlefish1 from '../../images/flamboyant_cuttlefish_2.jpg';
import flamboyantCuttlefish2 from '../../images/flamboyant_cuttlefish_3.jpg';

const adaptationsList = [
	{ name: 'Using Camouflage', content: 'Changing color helps cuttlefish blend into their environments to hide from predators (most fish).  Camouflage also helps the cuttlefish hunt.  It usually blends in with its surroundings so that the prey never see it coming.  If the cuttlefish\'s prey is particularly large and aggressive, it puts on a display of lights that literally stun its prey.  The cuttlefish’s highly specialized skin also helps it mate.  Males put on a display to try to impress the females.  In addition to changing color, cuttlefish can also change their texture slightly to enhance their camouflage, predatory stun, or mating display.' },
	{ name: 'Intelligence', content: 'Cuttlefish are extremely intelligent.  They are considered as smart, if not smarter, than most fish and octopi.  They are even smarter than some mammals.  This is surprising because most organisms without a backbone are not that intelligent.  Research has shown that cuttlefish can associate certain actions with responses such as pressing a button to get a fish.  They can also navigate mazes by learning to respond to complex cues.' },
	{ name: 'Pretending to Be a Different Gender (During Mating)', content: 'During mating, larger males usually get the first opportunity to mate with smaller females.  To get past larger males without a confrontation, smaller males change their color and texture to resemble females.  The males don\'t view them as a threat, so they have the opportunity to mate without fighting.  Interestingly, female cuttlefish appear to find this approach more attractive.  The females are much more likely to accept imitation females for mating.' },
	{ name: 'Flashing Bright Colors and Flaring Tentacles (Flamboyant Cuttlefish)', content: 'Flashing bright colors and flaring its tentacles is the way this particular cuttlefish chooses to discourage predators from eating it.  This serves as a warning to predators that it is poisonous.' },

]

export default function BehavioralAdaptations() {
	const bannerContent = {
		heading: 'Behavioral Adaptations'
	}
	return (
		<Page>
			<SEO
				title='Behavioral Adaptations'
				description='Using Camouflage, Intelligence, Pretending to Be a Different Gender, Flashing Bright Colors and Flaring Tentacles.  Click for more!'
				keywords='cuttlefish, behavioral, adaptations, camouflage, intelligence, gender, mating, bright, colors, flaring'
				image={flamboyantCuttlefish1}
			/>
			<Header>
				<NavBar />
				<Banner bannerContent={bannerContent} />
			</ Header>
			<Content>
				<List listItems={adaptationsList} />
				<figure className={styles.imageWrapper}>
					<img src={flamboyantCuttlefish1} alt='flamboyant cuttlefish' className={styles.image} />
					<img src={flamboyantCuttlefish2} alt='flamboyant cuttlefish' className={styles.image} />
					<figcaption className={styles.caption} >Flamboyant Cuttlefish</figcaption>
				</figure>
			</Content>
			<Footer />
		</Page>
	)
}