import { ReactNode } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

interface ColProps {
	children: ReactNode;

	xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

function Col(props: ColProps) {
	const { children, xs = 12, sm = 12, md = 12, lg = 12, xl = 12 } = props;

	return (
		<Grid2 xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
			{children}
		</Grid2>
	);
}

export { Col };
