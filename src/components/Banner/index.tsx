import React from 'react';
import styles from './styles.module.css';
import { Image } from '../../types';

interface BannerContent {
	heading: string;
	text?: string;
	button?: JSX.Element;
}

interface BannerProps {
	bannerImage?: Image;
	bannerContent?: BannerContent;
}

export function Banner({ bannerImage, bannerContent}: BannerProps) {
	return (
		<div className={styles.banner}>
			{bannerImage && 
				<div className={styles.bannerImageWrapper} >
					<img src={bannerImage.src} alt={bannerImage.alt} className={styles.bannerImage} />
				</div>
			}
			{bannerContent &&
			<div className={styles.bannerContent}>
				{bannerContent.heading && <h1 className={styles.bannerHeading}>{bannerContent.heading}</h1>}
				{bannerContent.text && <p className={styles.bannerText}>{bannerContent.text}</p>}
				{bannerContent.button && <div className={styles.buttonWrapper}>{bannerContent.button}</div>}
			</div>
			}
		</div>
	)
}