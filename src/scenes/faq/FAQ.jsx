import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Typography,
	useTheme,
} from '@mui/material';
import React from 'react';
import { ExpandMore } from '@mui/icons-material';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const FAQ = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	return (
		<Box padding="20px">
			<Header title="FAQ" subtitle="Frequently Asked Questions Page" />
			<Box mt="20px">
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />}>
						<Typography variant="h5" color={colors.greenAccent[500]}>
							Important Question?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							usce tempor turpis ligula. Donec quis erat metus. Fusce et odio
							pharetra, interdum arcu in, feugiat mi. Aliquam rhoncus magna
							enim. Suspendisse consequat egestas porta. In hac habitasse platea
							dictumst. Donec vestibulum, sem non vulputate commodo, sem mauris
							fermentum lorem, sit amet sollicitudin urna ex a lacus.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />}>
						<Typography variant="h5" color={colors.greenAccent[500]}>
							Another Important Question?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							usce tempor turpis ligula. Donec quis erat metus. Fusce et odio
							pharetra, interdum arcu in, feugiat mi. Aliquam rhoncus magna
							enim. Suspendisse consequat egestas porta. In hac habitasse platea
							dictumst. Donec vestibulum, sem non vulputate commodo, sem mauris
							fermentum lorem, sit amet sollicitudin urna ex a lacus.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />}>
						<Typography variant="h5" color={colors.greenAccent[500]}>
							Your Favorite Question?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							usce tempor turpis ligula. Donec quis erat metus. Fusce et odio
							pharetra, interdum arcu in, feugiat mi. Aliquam rhoncus magna
							enim. Suspendisse consequat egestas porta. In hac habitasse platea
							dictumst. Donec vestibulum, sem non vulputate commodo, sem mauris
							fermentum lorem, sit amet sollicitudin urna ex a lacus.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />}>
						<Typography variant="h5" color={colors.greenAccent[500]}>
							Some Random Question?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							usce tempor turpis ligula. Donec quis erat metus. Fusce et odio
							pharetra, interdum arcu in, feugiat mi. Aliquam rhoncus magna
							enim. Suspendisse consequat egestas porta. In hac habitasse platea
							dictumst. Donec vestibulum, sem non vulputate commodo, sem mauris
							fermentum lorem, sit amet sollicitudin urna ex a lacus.
						</Typography>
					</AccordionDetails>
				</Accordion>

				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMore />}>
						<Typography variant="h5" color={colors.greenAccent[500]}>
							Final Question?
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							usce tempor turpis ligula. Donec quis erat metus. Fusce et odio
							pharetra, interdum arcu in, feugiat mi. Aliquam rhoncus magna
							enim. Suspendisse consequat egestas porta. In hac habitasse platea
							dictumst. Donec vestibulum, sem non vulputate commodo, sem mauris
							fermentum lorem, sit amet sollicitudin urna ex a lacus.
						</Typography>
					</AccordionDetails>
				</Accordion>
			</Box>
		</Box>
	);
};

export default FAQ;
