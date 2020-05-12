import React from 'react';
import { Page } from '../../components/Page';
import { SEO } from '../../components/SEO';
import { Header } from '../../components/Header';
import { NavBar } from '../../components/NavBar';
import { Banner } from '../../components/Banner';
import { Content } from '../../components/Content';
import { Album } from '../../components/Album';
import { Link } from '../../components/Link';
import { Footer } from '../../components/Footer';
import styles from './styles.module.css';
import cuttlefishImages from '../../image-collections/all-cuttlefish';

const images = cuttlefishImages;

export function Extras() {
	const bannerContent = {
		heading: 'Extras'
	}
	return (
		<Page>
			<SEO 
				title='Extras'
				description='Cuttlefish pictures and fun links!'
			/>
			<Header>
				<NavBar />
				<Banner bannerContent={bannerContent} />
			</ Header>
			<Content>
				<section className={styles.gallery} >
					<h2 className={styles.sectionHeading} >Gallery</h2>
					<Album images={images} />
				</section>
				<section className={styles.section} >
					<h2 className={styles.sectionHeading} >Poll</h2>
					<span className={styles.linkWrapper} >
						<Link url='https://poll.fm/7436776/embed' linkText={'Click Here for Poll'} ></Link>
					</span>
				</section>
				<section className={styles.section} >
					<h2 className={styles.sectionHeading} >More Information</h2>
					<span className={styles.linkWrapper} >
						<Link url='https://www.pbs.org/video/nova-kings-of-camouflage/' linkText={'Cuttlefish Documentary (Amazing)'} ></Link>
					</span>
				</section>
				<section className={styles.section} >
					<h2 className={styles.sectionHeading} >Feedback</h2>
					<span className={styles.linkWrapper} >
						<Link url='https://poll.fm/7457220/embed' linkText={'Click Here to Give Feedback'} ></Link>
					</span>
				</section>
			</Content>
			<Footer />
		</Page>
	)
}