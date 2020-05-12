import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';
import classNames from 'classnames';

interface Link {
	path: string;
	text: string;
}

const links = [
	{ path: '/', text: 'Home' },
	{ path: '/structural-adaptations', text: 'Structural Adaptations' },
	{ path: '/behavioral-adaptations', text: 'Behavioral Adaptations' },
	{ path: '/physiological-adaptations', text: 'Physiological Adaptations' },
	{ path: '/specifics', text: 'Specifics' },
	{ path: '/interesting-facts', text: 'Interesting Facts' },
	{ path: '/extras', text: 'Extras' },
]

export function NavBar() {
	const linkList = useRef<HTMLUListElement>(null);
	const [ linkWidths, setLinkWidths ] = useState<number[]>([]);
	const [ visibleLinks, setVisibleLinks ] = useState<Link[]>(links);
	const [ hiddenLinks, setHiddenLinks ] = useState<Link[]>([]);
	const [ loaded, setLoaded ] = useState<boolean>(false);
	const getLinkWidths = () => {
		const links = Array.from(linkList?.current?.childNodes || []) as HTMLElement[];
		const widths = links.map(link => link.offsetWidth);
		setLinkWidths(widths);
		return widths;
	}
	const configureAdditionalLinks = (widths?: number[]) => {
		const linkListWidth = linkList?.current?.clientWidth || 0;
		const newVisibleLinks = links.slice();
		const newLinkWidths = widths?.slice() || linkWidths.slice();
		const more = newVisibleLinks.pop();
		if (more) newVisibleLinks.unshift(more);
		const moreWidth = newLinkWidths.pop();
		if (moreWidth) newLinkWidths.unshift(moreWidth);
		const linksCount = links.length;
		let newWidth = newLinkWidths.reduce((acc, curr) => curr + acc, 0);
		let i = linksCount;
		while (newWidth > linkListWidth && i > 0) {
			newVisibleLinks.pop();
			newWidth -= newLinkWidths.pop() || 0;
			i--;
		}
		const removed = linksCount - i;
		setHiddenLinks(links.slice(-1 * removed));
		setVisibleLinks(links.slice(0, -1 * removed));
	}
	useEffect(() => {
		configureAdditionalLinks(getLinkWidths());
		setLoaded(true);
	}, []) // eslint-disable-line
	useEffect(() => {
		const onResize = () => configureAdditionalLinks();
		window.addEventListener('resize', onResize);
		return () => {
			window.removeEventListener('resize', onResize);
		}
	})
	return (
		<div className={styles.navParent}>
			<nav>
				<ul ref={linkList} className={classNames(styles.navList, { [styles.loaded]: loaded })}>
					{
						visibleLinks.map(link => (
							<li key={link.path}>
								<NavLink exact to={link.path} className={styles.navItem} activeClassName={styles.active}>{link.text}</NavLink>
							</li>
						))
					}
					{hiddenLinks && <AdditionalLinks links={hiddenLinks} />}
				</ul>
			</nav>
		</div>
	)
}

interface AdditionalLinksProps {
	links: Link[];
}

function AdditionalLinks({ links }: AdditionalLinksProps) {
	const more = useRef<HTMLLIElement>(null);
	const [ active, setActive ] = useState<boolean>(false);
	useEffect(() => {
		const setMenuStatusOnFocus = () => {
			if (more?.current?.isSameNode(document.activeElement) || more?.current?.contains(document.activeElement)) {
				setActive(true);
			} else {
				setActive(false);
			}
		}
		const setMenuStatusOnClick = (e: MouseEvent) => {
			if (e.target instanceof HTMLElement && (more?.current?.isSameNode(e.target) || more?.current?.contains(e.target))) {
				setActive(true);
			} else {
				setActive(false);
			}
		}
		window.addEventListener('focus', setMenuStatusOnFocus, true);
		window.addEventListener('click', setMenuStatusOnClick, true);
		return () => {
			window.removeEventListener('focus', setMenuStatusOnFocus, true);
			window.removeEventListener('click', setMenuStatusOnClick, true);
		}
	})
	const dropdown = (
		<div className={styles.additionalListWrapper}>
			<ul className={styles.additionalList} >
				{
					links.map(link => (
						<li key={link.path}>
							<NavLink exact to={link.path} className={styles.additionalNavItem} activeClassName={styles.active} tabIndex={0} >{link.text}</NavLink>
						</li>
					))
				}
			</ul>
		</div>
	);
	return (
		<li ref={more} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} className={classNames(styles.navItem, styles.more)} tabIndex={0} >
			More...
			{active && dropdown}
		</li>
	)
}