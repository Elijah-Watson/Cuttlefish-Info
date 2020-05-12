import React from 'react';
import styles from './styles.module.css';

interface BannerProps {
	children: React.ReactNode;
}

export function Header({ children }: BannerProps) {
	return (
		<header className={styles.header}>
			{children}
		</header>
	)
}