import styles from './login.module.scss';

function FormLogin() {
	return (
		<div className={styles.form}>
			<div className={styles.login}>
				<input className={styles.inputs} placeholder='E-mail' type='text'></input>
				<input className={styles.inputs} placeholder='Senha' type='password'></input>
				<button className={styles.buttons}>Login</button>
			</div>
		</div>
	);
}

export { FormLogin };
