import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import StateBox from '../../components/StateBox';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { tokens } from '../../theme';

const DashboardRow1 = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<>
			<Grid item xs={12} md={6} lg={3}>
				<Box height="140px" bgcolor={colors.primary[400]}>
					<StateBox
						icon={
							<EmailIcon
								sx={{ color: colors.greenAccent[500], fontSize: '26px' }}
							/>
						}
						title="12,361"
						subtitle="Emails Sent"
						progress={75}
						increase="+14%"
						size="3rem"
					/>
				</Box>
			</Grid>
			<Grid item xs={12} md={6} lg={3}>
				<Box height="140px" bgcolor={colors.primary[400]}>
					<StateBox
						icon={
							<PointOfSaleIcon
								sx={{ color: colors.greenAccent[500], fontSize: '26px' }}
							/>
						}
						title="431,225"
						subtitle="Sales Obtained"
						progress={50}
						increase="+21%"
						size="3rem"
					/>
				</Box>
			</Grid>
			<Grid item xs={12} md={6} lg={3}>
				<Box height="140px" bgcolor={colors.primary[400]}>
					<StateBox
						icon={
							<PersonAddIcon
								sx={{ color: colors.greenAccent[500], fontSize: '26px' }}
							/>
						}
						title="32,441"
						subtitle="New Clients"
						progress={30}
						increase="+5%"
						size="3rem"
					/>
				</Box>
			</Grid>
			<Grid item xs={12} md={6} lg={3}>
				<Box height="140px" bgcolor={colors.primary[400]}>
					<StateBox
						icon={
							<DownloadOutlinedIcon
								sx={{ color: colors.greenAccent[500], fontSize: '26px' }}
							/>
						}
						title="1,325,134"
						subtitle="Traffic Recived"
						progress={80}
						increase="+43%"
						size="3rem"
					/>
				</Box>
			</Grid>
		</>
	);
};

export default DashboardRow1;
