import { ReactNode } from 'react';
import styles from './form.module.scss'

interface FormProps {
	title?: string;
	children: ReactNode;
}

function Form(props: FormProps) {
	const { title, children } = props
	return (
		<div className={styles.form}>
			{title && <h1 className={styles.title}>{title}</h1>}
			{children}
		</div>
	)
};

export { Form }
