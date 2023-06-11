import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import StateBox from '../../components/StateBox';
import { tokens } from '../../theme';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const Dashborad = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box p="20px" sx={{}}>
			<Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
			<Grid mt="20px" container spacing={2}>
				<Grid item xs={12} sm={3}>
					<StateBox
						icon={
							<EmailIcon
								sx={{ color: colors.greenAccent[500], fontSize: '26px' }}
							/>
						}
						title="12,361"
						subtitle="Emails Sent"
						progress={14}
						size="3.5rem"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<StateBox
						icon={
							<PointOfSaleIcon
								sx={{ color: colors.greenAccent[500], fontSize: '26px' }}
							/>
						}
						title="431,225"
						subtitle="Sales Obtained"
						progress={21}
						size="3.5rem"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<StateBox
						icon={
							<PersonAddIcon
								sx={{ color: colors.greenAccent[500], fontSize: '26px' }}
							/>
						}
						title="32,441"
						subtitle="New Clients"
						progress={5}
						size="3.5rem"
					/>
				</Grid>
				<Grid item xs={12} sm={3}>
					<StateBox
						icon={
							<DownloadOutlinedIcon
								sx={{ color: colors.greenAccent[500], fontSize: '26px' }}
							/>
						}
						title="1,325,134"
						subtitle="Traffic Recived"
						progress={43}
						size="3.5rem"
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Dashborad;
