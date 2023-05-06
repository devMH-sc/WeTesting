import { Inputslabel } from "../../components/Inputslaber"
import { Form } from "../../components/Form"
import { Inputs } from "../../components/Inputs"
import { Seconbuttons } from "../../components/Seconbuttons"
import { Buttons } from "../../components/Buttons"

function Tasks() {
	return (
		<Form title="Lançamentos" pages="Tasks">
			<Inputs placeInp="E-mail">.</Inputs>
			<Inputs placeInp="Senha">.</Inputs>
			<Inputslabel namelabelInp="Nome"></Inputslabel>
			<Seconbuttons buttonsName="Salvar"></Seconbuttons>
			<Inputslabel namelabelInp="Nome" labelerro="erro"></Inputslabel>
			<Buttons nameBot="Cancelar" iconbutton="icon"></Buttons>
		</Form>
	);
}

export { Tasks }
