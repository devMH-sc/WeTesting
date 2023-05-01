import { ReactNode } from 'react';
import styles from './page.module.scss';

interface PageProps {
	title?: string;
	children: ReactNode;
}

function Page(props: PageProps) {
	const { title, children } = props;
	return (
		<div className={styles.page}>
			{title && <h1 className={styles.title}>{title}</h1>}
			{children}
		</div>
	);
}

export { Page };
