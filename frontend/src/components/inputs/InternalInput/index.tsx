import { InputHTMLAttributes, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import styles from './internalInput.module.scss';

interface InternalInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	name: string;
}

function InternalInput(props: InternalInputProps) {
	const { label, name } = props;
	const [filled, setFilled] = useState(false);
	const inputRef = useRef<HTMLDivElement>(null);
	const {
		register,
		formState: { errors },
	} = useFormContext();
	const existeErro = errors[name]?.message ?? '';

	function handleInputChange(event: any) {
		setFilled(!!event.target.value);
	}

	function handleFocusToInput() {
		inputRef?.current?.getElementsByTagName('input')[0].focus();
	}

	return (
		<>
			<div
				ref={inputRef}
				className={`${styles.inputContainer} ${filled ? styles.filled : ''} ${
					!!existeErro ? styles.error : ''
				}`}
			>
				<input
					id={`InternalInput_${name}`}
					type="text"
					{...register(name, {
						onChange: handleInputChange,
					})}
				/>
				<label htmlFor="InternalInput" onClick={handleFocusToInput}>
					{label}
				</label>
				{!!existeErro && (
					<span className={styles.errorText}>
						<>{existeErro}</>
					</span>
				)}
			</div>
		</>
	);
}

export { InternalInput };
