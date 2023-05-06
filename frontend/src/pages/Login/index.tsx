import { Buttons } from '../../components/Buttons';
import { Form } from '../../components/Form';
import { Inputs } from '../../components/Inputs';
import styles from './login.module.scss';


function Login() {
	return (
		<div className={styles.form}>
			<Form title="WeTesting" pages="Login">
			<div className={styles.inputss}><Inputs placeInp="E-mail">.</Inputs></div>
					<Inputs placeInp="Senha">.</Inputs>
				<Buttons nameBot="Login"></Buttons>
			</Form>
		</div>
	);
}

export { Login };
