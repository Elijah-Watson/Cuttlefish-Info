import React from 'react';
import styles from './styles.module.css';

interface ButtonProps {
	buttonText: string;
	clickHandler: Function;
}

export function Button({ buttonText, clickHandler }: ButtonProps) {
	return <button onClick={() => clickHandler()} className={styles.button}>{buttonText}</button>
}