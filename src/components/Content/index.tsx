import React from 'react';
import styles from './styles.module.css';

interface ContentProps {
	children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
	return (
		<div className={styles.contentWrapper}>
			<div className={styles.content}>
				{children}
			</div>
		</div>
	)
}