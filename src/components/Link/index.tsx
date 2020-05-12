import React from 'react';
import styles from './styles.module.css';

interface LinkProps {
	linkText: string;
	url: string;
}

export function Link({ linkText, url }: LinkProps) {
	return <a href={url} className={styles.link}>{linkText}</a>
}