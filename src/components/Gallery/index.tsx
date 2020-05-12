import React, { useState, useEffect, useCallback, useRef } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';
import { Image } from '../../types';

interface GalleryProps {
	images: Image[];
}

export function Gallery({ images }: GalleryProps) {
	const focusedWrapper = useRef<HTMLDivElement>(null);
	const carousel = useRef<HTMLDivElement>(null);
	const [ current, setCurrent ] = useState<number>(0);
	const [ rotateToggle, setRotateToggle ] = useState<boolean>(true);
	const scrollIntoView = (toScroll: number) => {
		const currentCarousel = carousel?.current;
		const active = carousel?.current?.childNodes[toScroll] as HTMLElement;
		const carouselWidth = currentCarousel ? currentCarousel.offsetWidth : 0;
		const activeOffset = active?.offsetLeft || 0;
		const activeWidth = active?.offsetWidth;
		const scrollTarget = activeOffset + activeWidth / 2 - carouselWidth / 2;
		currentCarousel?.scrollTo({
			left: scrollTarget,
			behavior: 'smooth'
		});
	}
	const decrementCurrent = useCallback(
		() => {
			const newCurrent = current <= 0 ? images.length - 1 : current - 1
			setCurrent(newCurrent);
			scrollIntoView(newCurrent);
		},
		[current, images.length]
	);
	const incrementCurrent = useCallback(
		() => {
			const newCurrent = current >= images.length - 1 ? 0 : current + 1
			setCurrent(newCurrent);
			scrollIntoView(newCurrent);
		},
		[current, images.length]
	);
	const previewClickHandler = (i: number) => {
		setRotateToggle(false);
		setCurrent(i);
		scrollIntoView(i);
	}
	const leftClickHandler = () => {
		setRotateToggle(false);
		decrementCurrent();
	}
	const rightClickHandler = () => {
		setRotateToggle(false);
		incrementCurrent();
	}
	const playPauseClickHandler = () => {
		setRotateToggle(rotateToggle => !rotateToggle);
	}
	useEffect(() => {
		const rotateImage = setInterval(incrementCurrent, 2500);
		if (!rotateToggle) clearInterval(rotateImage);
		return () => {
			clearInterval(rotateImage);
		}
	}, [rotateToggle, incrementCurrent]);
	const leftArrowSVG = <svg width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M7.854 4.646a.5.5 0 010 .708L5.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z' clipRule='evenodd' /><path fillRule='evenodd' d='M4.5 8a.5.5 0 01.5-.5h6.5a.5.5 0 010 1H5a.5.5 0 01-.5-.5z' clipRule='evenodd' /></svg>
	const rightArrowSVG = <svg width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z' clipRule='evenodd' /><path fillRule='evenodd' d='M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z' clipRule='evenodd' /></svg>
	const pauseSVG = <svg width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M5.5 3.5A1.5 1.5 0 017 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5zm5 0A1.5 1.5 0 0112 5v6a1.5 1.5 0 01-3 0V5a1.5 1.5 0 011.5-1.5z' /></svg>
	const playSVG = <svg width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path d='M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 010 1.393z' /></svg>
	return (
		<div className={styles.galleryWrapper}>
			<div className={styles.gallery}>
				<div ref={focusedWrapper} className={styles.focusedWrapper}>
					<figure className={styles.focusedFigure}>
						<img src={images[current].src} alt={images[current].alt} className={styles.focusedImage} />
						{images[current].caption && <figcaption className={styles.focusedCaption}>{images[current].caption}</figcaption>}
					</figure>
					<div className={styles.controls}>
						<div className={styles.controlsBar} >
							<div className={styles.left} onClick={(() => leftClickHandler())}>{leftArrowSVG}</div>
							<div className={styles.playPause} onClick={(() => playPauseClickHandler())}>{rotateToggle ? pauseSVG : playSVG }</div>
							<div className={styles.right} onClick={(() => rightClickHandler())}>{rightArrowSVG}</div>
						</div>
					</div>
				</div>
				<div ref={carousel} className={styles.carousel}>
					{
					images.map((image, i) => <img key={image.src + image.alt} src={image.src} alt={image.alt} className={classNames(styles.imagePreview, {[styles.current]: current === i})} onClick={() => previewClickHandler(i)} />)
					}
				</div>
			</div>
		</div>
	)
}