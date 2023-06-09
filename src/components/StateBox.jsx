import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../theme';
import Progress from './Progress';

const StateBox = ({ icon, title, subtitle, progress, increase, size }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	console.log(progress);
	return (
		<Box
			padding="20px"
			display="flex"
			justifyContent="space-between"
			alignItems="center"
			flexWrap="wrap"
			borderRadius="2px"
		>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="flex-start"
				gap={1}
			>
				{icon}
				<Typography variant="h4" fontWeight="bold" color={colors.grey[100]}>
					{title}
				</Typography>
				<Typography variant="h5" color={colors.greenAccent[500]}>
					{subtitle}
				</Typography>
			</Box>
			<Box>
				<Progress value={progress} size={size} />
				<Typography
					mt="8px"
					fontStyle="italic"
					variant="h5"
					color={colors.greenAccent[500]}
				>
					{increase}
				</Typography>
			</Box>
		</Box>
	);
};

export default StateBox;
