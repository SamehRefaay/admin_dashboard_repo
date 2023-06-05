import { Box, useTheme, Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import { tokens } from '../../theme';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

const Team = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{ field: 'id', headerName: 'ID' },
		{
			field: 'name',
			headerName: 'Name',
			cellClassName: 'name-column--cell',
			flex: 1,
		},
		{
			field: 'age',
			headerName: 'Age',
			type: 'number',
			headerAlign: 'left',
			align: 'left',
		},
		{ field: 'phone', headerName: 'Phone Number', flex: 1 },
		{ field: 'email', headerName: 'Email', flex: 1 },
		{
			field: 'access',
			headerName: 'Access Level',
			flex: 1,
			headerAlign: 'center',
			renderCell: ({ row: { access } }) => (
				<Box
					width="60%"
					m="0 auto"
					p="5px"
					display="flex"
					justifyContent="center"
					backgroundColor={
						access === 'admin'
							? colors.greenAccent[600]
							: colors.greenAccent[700]
					}
					borderRadius="4px"
				>
					{access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
					{access === 'manager' && <SecurityOutlinedIcon />}
					{access === 'user' && <LockOpenOutlinedIcon />}
					<Typography sx={{ ml: '5px' }} color={colors.grey[100]}>
						{access}
					</Typography>
				</Box>
			),
		},
	];
	return (
		<Box p={'20px'}>
			<Header title={'Team'} subtitle="Manging the team members" />
			<Box
				mt="20px"
				height="73vh"
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300],
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: colors.blueAccent[700],
						borderTop: 'none',
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},
				}}
			>
				<DataGrid rows={mockDataTeam} columns={columns} checkboxSelection />
			</Box>
		</Box>
	);
};

export default Team;
