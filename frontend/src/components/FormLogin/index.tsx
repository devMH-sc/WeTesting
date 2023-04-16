import styles from './login.module.scss'


function FormLogin(){
	return(
		<div className={styles.login}>
			<input></input>
			<input></input>
			<button>Login</button>
		</div>
	)
}

export { FormLogin }
