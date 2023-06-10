import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';

const Pie = () => {
	return (
		<Box padding="20px">
			<Header title="PIE CHART" subtitle="Simple Pie Chart" />
			<Box mt="20px" height="75vh">
				<PieChart />
			</Box>
		</Box>
	);
};

export default Pie;
