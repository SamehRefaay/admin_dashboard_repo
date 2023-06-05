import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import { DataGrid } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';

const Invoices = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const columns = [
		{ field: 'id', headerName: 'ID' },
		{
			field: 'name',
			headerName: 'Name',
			cellClassName: 'name-column-cell',
			flex: 1,
		},
		{ field: 'phone', headerName: 'Phone', flex: 1 },
		{ field: 'email', headerName: 'Email', flex: 1 },
		{
			field: 'cost',
			headerName: 'Cost',
			flex: 1,
			renderCell: params => (
				<Typography
					color={colors.greenAccent[300]}
				>{`$${params.row.cost}`}</Typography>
			),
		},
		{ field: 'date', headerName: 'Date', flex: 1 },
	];

	return (
		<Box p={2}>
			<Header title="Invoices" subtitle="List of Invoice Balance" />
			<Box
				mt={2}
				sx={{
					'& .MuiDataGrid-root': {
						border: 'none',
					},
					'& .MuiDataGrid-cell': {
						borderBottom: 'none',
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
					'& .name-column-cell': {
						color: colors.greenAccent[300],
					},
					'& .MuiCheckbox-root': {
						color: `${colors.greenAccent[200]} !important`,
					},
				}}
			>
				<DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
			</Box>
		</Box>
	);
};

export default Invoices;
