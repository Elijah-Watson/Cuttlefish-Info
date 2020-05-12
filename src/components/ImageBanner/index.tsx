import React from 'react';
import styles from './styles.module.css';
import { Image } from '../../types';

interface BannerProps {
	bannerImage: Image;
	heading?: string;
}

export function ImageBanner({ bannerImage, heading }: BannerProps) {
	return (
		<div className={styles.banner}>
			<img src={bannerImage.src} alt={bannerImage.alt} className={styles.bannerImage} />
			{heading &&
				<div className={styles.bannerCover}>
					<h1 className={styles.bannerHeading}>{heading}</h1>
				</div>}
		</div>
	)
}