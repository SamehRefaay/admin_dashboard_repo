import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';

const Bar = () => {
	return (
		<Box padding="20px">
			<Header title="BAR CHART" subtitle="Simple Bar Chart" />
			<Box mt="20px" height="75vh">
				<BarChart />
			</Box>
		</Box>
	);
};

export default Bar;
