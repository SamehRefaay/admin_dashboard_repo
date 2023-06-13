import { Box, Grid, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import LineChart from '../../components/LineChart';
import { tokens } from '../../theme';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { mockTransactions } from '../../data/mockData';

const DashboardRow2 = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<>
			<Grid item xs={12} lg={8}>
				<Box
					padding="20px"
					height="280px"
					bgcolor={colors.primary[400]}
					borderRadius="2px"
				>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
					>
						<Box>
							<Typography
								variant="h5"
								color={colors.grey[100]}
								fontWeight="bold"
							>
								Revenue Generated
							</Typography>

							<Typography
								variant="h3"
								fontWeight="bold"
								color={colors.greenAccent[500]}
							>
								$59,342,32
							</Typography>
						</Box>
						<IconButton>
							<DownloadOutlinedIcon
								sx={{ color: colors.greenAccent[500], fontSize: '30px' }}
							/>
						</IconButton>
					</Box>

					<Box height="200px">
						<LineChart isDashboard="true" />
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} lg={4}>
				<Box
					overflow="auto"
					height="280px"
					bgcolor={colors.primary[400]}
					borderRadius="2px"
				>
					<Typography
						variant="h5"
						padding="20px"
						color={colors.grey[100]}
						fontWeight="bold"
					>
						Recent Transactions
					</Typography>
					{mockTransactions.map((transaction, index) => (
						<Box
							key={transaction.txId}
							display="flex"
							justifyContent="space-around"
							alignItems="center"
							padding="10px 0"
							sx={{
								borderTop: `5px solid ${colors.primary[500]}`,
								// border-bottom={`2px solid ${colors.primary[500]}`}
							}}
						>
							<Box>
								<Typography
									variant="h5"
									color={colors.greenAccent[500]}
									fontWeight="bold"
								>
									{transaction.txId}
								</Typography>
								<Typography color={colors.grey[100]}>
									{transaction.user}
								</Typography>
							</Box>
							<Typography color={colors.grey[100]} fontWeight="bold">
								{transaction.date}
							</Typography>
							<Box
								p="5px 10px"
								color={colors.primary[500]}
								fontWeight="bold"
								borderRadius="4px"
								bgcolor={colors.greenAccent[500]}
							>
								{`$${transaction.cost}`}
							</Box>
						</Box>
					))}
				</Box>
			</Grid>
		</>
	);
};

export default DashboardRow2;
