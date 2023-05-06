import { ReactNode } from 'react';
import styles from './form.module.scss'

interface FormProps {
	title?: string;
	children: ReactNode;
	pages?: string;
}



function Form(props: FormProps) {
	const { title, children, pages } = props

	let formHeight, formWidth;

	if(pages === 'Login'){
		formHeight = '40%';
		formWidth = '32%';
	}

	return (
		<div className={styles.form} style={{height: formHeight, width: formWidth}}>
			{title && <h1 className={styles.title}>{title}</h1>}
			{children}
		</div>
	)
};

export { Form }
