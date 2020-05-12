import React, { useState } from 'react';
import styles from './styles.module.css';
import { Image } from '../../types';

interface GalleryProps {
	images: Image[];
}

export function Album({ images }: GalleryProps) {
	const [ boxedImage, setBoxedImage ] = useState<Image>();
	const imageClickHandler = (image: Image) => {
		setBoxedImage(image);
	}
	const closeBox = () => {
		setBoxedImage(undefined);
	}
	return (
		<div className={styles.albumWrapper} >
			<div className={styles.album}>
				{
					images.map(image => <img key={image.src + image.alt} src={image.src} alt={image.alt} className={styles.item} onClick={() => imageClickHandler(image)} />)
				}
			</div>
			{boxedImage && <ImageBox image={boxedImage} closeBox={closeBox} />}
		</div>
	)
}

interface ImageBoxProps {
	image: Image;
	closeBox: Function;
}

function ImageBox({ image, closeBox }: ImageBoxProps) {
	const wrapperClickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (e.target === e.currentTarget) closeBox();
	}
	return (
		<div onClick={e => wrapperClickHandler(e)} className={styles.imageBoxWrapper}>
			<div className={styles.imageBox} >
				<figure className={styles.imageBoxFigure} >
					<img src={image.src} alt={image.alt} className={styles.imageBoxImage} />
					{image.caption && <figcaption className={styles.imageBoxCaption} >{image.caption}</figcaption>}
				</figure>
				<button onClick={() => closeBox()} className={styles.imageBoxButton} >X</button>
			</div>
		</div>
	)
}