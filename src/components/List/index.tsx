import React from 'react';
import styles from './styles.module.css';

interface ListItem {
	name: string;
	content: string;
}

interface ListProps {
	listItems: ListItem[];
}

export function List({ listItems }: ListProps) {
	return (
		<ul className={styles.list}>
			{
			listItems.map(({name, content}) => (
				<Item key={name} name={name} content={content} />
			))
			}
		</ul>
	)
}

function Item({ name, content }: ListItem) {
	return (
		<li className={styles.item}>
			<span className={styles.itemName}><b><u>{name}</u>: </b></span>
			<span className={styles.itemContent}>{content}</span>
		</li>
	)
}