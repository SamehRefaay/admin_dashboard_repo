import { Box, Grid, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import Progress from '../../components/Progress';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';

const DashboardRow3 = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<>
			<Grid item xs={12} lg={4}>
				<Box
					padding="20px"
					height="280px"
					bgcolor={colors.primary[400]}
					borderRadius="2px"
				>
					<Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
						Campaign
					</Typography>

					<Box
						height="250px"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						textAlign="center"
					>
						<Progress value={75} size="7rem" />
						<Typography
							mt="10px"
							variant="h5"
							color={colors.greenAccent[500]}
							fontWeight="bold"
						>
							$48,352 revenue generated
						</Typography>
						<Typography>includes extra misc expenditures and costs</Typography>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} lg={4}>
				<Box
					padding="20px"
					height="280px"
					bgcolor={colors.primary[400]}
					borderRadius="2px"
				>
					<Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
						Sales Quantity
					</Typography>

					<Box
						height="250px"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
					>
						<BarChart isDashboard={true} />
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} lg={4}>
				<Box
					padding="20px"
					height="280px"
					bgcolor={colors.primary[400]}
					borderRadius="2px"
				>
					<Typography variant="h5" color={colors.grey[100]} fontWeight="bold">
						Geography Based Traffic
					</Typography>

					<Box
						height="250px"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						padding="20px"
					>
						<GeographyChart isDashboard="true" />
					</Box>
				</Box>
			</Grid>
		</>
	);
};

export default DashboardRow3;
