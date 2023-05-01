import { Col } from '../../Col';
import { Grid } from '../../Grid';
import { ButtonType, InternalButton } from '../InternalButton';

import styles from './styles.module.scss';

interface ActionButtonsProps {
	idForm: string;
	cancel: (props: any) => any;
	save: (props: any) => any;
}

function ActionButtons(props: ActionButtonsProps) {
	const { idForm, cancel, save } = props;
	return (
		<Grid>
			<Col xs={12} sm={6} md={6} lg={6} xl={6}>
				<InternalButton
					type={ButtonType.PRIMARY}
					label="Cancelar"
					onClick={cancel}
					background={styles.cancelColor}
				/>
			</Col>
			<Col xs={12} sm={6} md={6} lg={6} xl={6}>
				<InternalButton
					type={ButtonType.PRIMARY}
					form={idForm}
					label="Salvar"
					onClick={save}
					background={styles.saveColor}
				/>
			</Col>
		</Grid>
	);
}

export { ActionButtons };
