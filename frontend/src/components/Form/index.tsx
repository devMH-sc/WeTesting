import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './form.module.scss';
import { ReactNode } from 'react';
import { ObjectSchema } from 'yup';

interface FormProps {
	id: string;
	children: ReactNode;
	validateSchema: ObjectSchema<any>;
	submit?: any;
}

function Form(props: FormProps) {
	const { id, children, validateSchema, submit } = props;
	const formContext = useForm({
		resolver: yupResolver(validateSchema),
	});

	return (
		<FormProvider {...formContext}>
			<form
				id={id}
				className={styles.form}
				onSubmit={formContext.handleSubmit(submit)}
			>
				{children}
			</form>
		</FormProvider>
	);
}

export { Form };
