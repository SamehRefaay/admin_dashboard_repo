import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';

const Progress = props => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress
				variant="determinate"
				value={100}
				thickness={3}
				size={props.size}
				sx={{ color: colors.blueAccent[500] }}
				style={{ position: 'absolute', right: 0, zIndex: '1' }}
			/>
			<CircularProgress
				variant="determinate"
				{...props}
				thickness={3}
				sx={{ color: colors.greenAccent[500] }}
				style={{ position: 'relative', zIndex: '2' }}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					zIndex: '3',
				}}
			>
				<Typography
					variant="caption"
					component="div"
					fontSize="14px"
					fontStyle="italic"
					color={colors.greenAccent[500]}
				>
					{`${Math.round(props.value)}%`}
				</Typography>
			</Box>
		</Box>
	);
};

export default Progress;
