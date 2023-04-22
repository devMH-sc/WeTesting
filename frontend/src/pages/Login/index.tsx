import { Bottons } from "../../components/Bottons"
import { Form } from "../../components/Form"
import { Inputs } from "../../components/Inputs"

function Login() {
	return (
		<Form title="WeTesting">
			<Inputs placeInp="E-mail">e</Inputs>
			<Inputs placeInp="Senha">s</Inputs>
			<Bottons namebot="Login"></Bottons>
		</Form>
	)
}

export { Login }
