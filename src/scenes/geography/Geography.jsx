import { Box, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import GeographyChart from '../../components/GeographyChart';

const Geography = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box padding="20px">
			<Header title="Geography Chart" subtitle="Simple Geography Chart" />
			<Box
				mt="20px"
				height="75vh"
				border={`1px solid ${colors.grey[100]}`}
				borderRadius="4px"
			>
				<GeographyChart />
			</Box>
		</Box>
	);
};

export default Geography;
