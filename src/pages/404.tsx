import React from 'react';
import { navigate } from 'gatsby';
import { Button } from '../components/Button';
import styles from './404.module.css';
import cuttlefishLogo from '../images/cuttlefish-logo-cropped.png';

export default function Home() {
	const clickHandler = () => {
		navigate('/');
	}
	return (
		<div className={styles.centerWrapper}>
			<div className={styles.centerContent}>
				<img src={cuttlefishLogo} alt='cuttlefish logo' className={styles.logo} />
				<h1 className={styles.heading} >Page Not Found</h1>
				<p className={styles.text} >Oh no!  The page you were looking for has been removed or relocated.  Or maybe a cuttlefish ate it.</p>
				<div className={styles.buttonWrapper} >
					<Button buttonText='Go the home page' clickHandler={clickHandler} />
				</div>
			</div>
		</div>
	)
}