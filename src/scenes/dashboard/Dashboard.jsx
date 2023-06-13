import { Box, Button, Grid, useTheme, useMediaQuery } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { tokens } from '../../theme';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import DashboardRow2 from './DashboardRow2';
import DashboardRow3 from './DashboardRow3';
import DashboardRow1 from './DashboardRow1';

const Dashborad = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const isMobile = useMediaQuery('(max-width:600px)');
	return (
		<Box padding={isMobile ? '10px' : '20px'}>
			<Box
				display="flex"
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="center"
				gap={isMobile ? '10px' : null}
			>
				<Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
				<Button
					fullWidth={isMobile}
					variant="contained"
					startIcon={<DownloadOutlinedIcon />}
					sx={{
						fontSize: '18px',
						padding: '10px 20px',
						backgroundColor: colors.blueAccent[700],
						'&:hover': {
							backgroundColor: colors.greenAccent[500],
						},
					}}
				>
					DOWNLOAD REPORTS
				</Button>
			</Box>
			<Grid mt="10px" container spacing="20px">
				{/* Row 1*/}
				<DashboardRow1 />
				{/* Row 2 */}
				<DashboardRow2 />
				{/* Row 3 */}
				<DashboardRow3 />
			</Grid>
		</Box>
	);
};

export default Dashborad;
