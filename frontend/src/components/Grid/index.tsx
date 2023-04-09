import { ReactNode } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

interface GridProps {
	children: ReactNode;
	column: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

function Grid(props: GridProps) {
	const { children } = props;
	return (
		<Grid2 container columns={12} spacing={1}>
			{children}
		</Grid2>
	);
}

export { Grid };
