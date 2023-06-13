import React, { useState } from 'react';
import {
	Box,
	ListItem,
	useTheme,
	Typography,
	ListItemText,
	useMediaQuery,
	Grid,
} from '@mui/material';
import { tokens } from '../../theme';
import Header from '../../components/Header';
import FullCalendar from '@fullcalendar/react';
import { formatDate } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

const Calendar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const isMobile = useMediaQuery('(max-width:600px)');
	const [currentEvents, setCurrentEvents] = useState([]);

	const handleDateSelect = selected => {
		const title = prompt('Please enter a new title for your envent');
		const calendarApi = selected.view.calendar;
		calendarApi.unselect();

		if (title) {
			calendarApi.addEvent({
				id: `${selected.dateStr}-${title}`,
				title,
				start: selected.startStr,
				end: selected.endStr,
				allDay: selected.allDay,
			});
		}
	};

	const handleEventClick = selected => {
		if (
			window.confirm(
				`Are you sure you want to delete the event ${selected.event.title} ?`
			)
		) {
			selected.event.remove();
		}
	};

	return (
		<Box padding="20px">
			<Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
			<Grid mt="20px" container height="75vh">
				<Grid item xs={12} lg={2}>
					<Box
						backgroundColor={colors.primary[400]}
						p="10px"
						borderRadius="4px"
					>
						{currentEvents.map(event => (
							<ListItem
								key={event.id}
								sx={{
									mt: '10px',
									backgroundColor: colors.greenAccent[500],
									borderRadius: '2px',
								}}
							>
								<ListItemText
									primary={event.title}
									secondary={
										<Typography>
											{formatDate(event.start, {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</Typography>
									}
								></ListItemText>
							</ListItem>
						))}
					</Box>
				</Grid>
				<Grid item xs={12} lg={10}>
					{/* Calendar */}
					<Box p={'15px'} borderRadius="4px">
						<FullCalendar
							height="75vh"
							plugins={[
								dayGridPlugin,
								timeGridPlugin,
								interactionPlugin,
								listPlugin,
							]}
							headerToolbar={
								isMobile
									? { start: 'prev,next', center: 'title', end: '' }
									: {
											left: 'prev,next today',
											center: 'title',
											end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
									  }
							}
							footerToolbar={
								isMobile
									? {
											center: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
									  }
									: undefined
							}
							initialView="dayGridMonth"
							editable="true"
							selectable="true"
							selectMirror="true"
							dayMaxEvents="true"
							select={handleDateSelect}
							eventClick={handleEventClick}
							eventsSet={events => setCurrentEvents(events)}
							initialEvents={[
								{
									id: '1234',
									title: 'All-day event',
									date: '2023-06-14',
								},
								{
									id: '4321',
									title: 'Timed event',
									date: '2023-06-28',
								},
							]}
						/>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Calendar;

{
	/* calendar sidebar 'events' */
}
// 		<Box
//
// 		flex={isMobile ? undefined : '1 1 20%'}
//
// 	>

// 	</Box>
//
// </>
