import { Box, useTheme } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { mockDataContacts } from '../../data/mockData';
import { tokens } from '../../theme';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Contacts = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const columns = [
		{ field: 'id', headerName: 'ID', flex: 0.5 },
		{ field: 'registrarId', headerName: 'Registrar Id' },
		{
			field: 'name',
			headerName: 'Name',
			flex: 1,
			cellClassName: 'name-column--cell',
		},
		{ field: 'age', headerName: 'Age', flex: 0.5 },
		{ field: 'phone', headerName: 'Phone', flex: 1 },
		{ field: 'email', headerName: 'Email', flex: 1 },
		{ field: 'address', headerName: 'Address', flex: 1 },
		{ field: 'city', headerName: 'City' },
		{ field: 'zipCode', headerName: 'Zip Code' },
	];

	return (
		<Box p={2}>
			<Header
				title="Contacts"
				subtitle="List of Contacts For Future Refrence"
			/>
			<Box
				mt={2}
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .name-column--cell': {
						color: colors.greenAccent[300],
					},
					'& .MuiDataGrid-columnHeaders': {
						backgroundColor: colors.blueAccent[700],
						borderBottom: 'none',
					},
					'& .MuiDataGrid-cell': { borderBottom: 'none' },
					'& .MuiDataGrid-virtualScroller': {
						backgroundColor: colors.primary[400],
					},
					'& .MuiDataGrid-footerContainer': {
						backgroundColor: colors.blueAccent[700],
						borderTop: 'none',
					},
					'& .MuiDataGrid-toolbarContainer .MuiButton-text': {
						color: `${colors.grey[100]} !important`,
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},
				}}
			>
				<DataGrid
					rows={mockDataContacts}
					columns={columns}
					slots={{
						toolbar: GridToolbar,
					}}
					sx={{ height: '73vh' }}
					checkboxSelection
				/>
			</Box>
		</Box>
	);
};

export default Contacts;
