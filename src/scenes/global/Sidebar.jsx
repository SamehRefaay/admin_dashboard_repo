import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import stev from '../../assets/images/stev.png';
import { tokens } from '../../theme';
import HomeIcon from '@mui/icons-material/Home';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const Sidebar = ({ drawerWidth, appBarHeight, open, handleDrawerClose }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const openedMixin = theme => ({
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
		overflowX: 'hidden',
	});

	const closedMixin = theme => ({
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: `calc(${theme.spacing(7)} + 1px)`,
		[theme.breakpoints.up('sm')]: {
			width: `calc(${theme.spacing(8)} + 1px)`,
		},
	});

	const DrawerHeader = styled('div')(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	}));

	const Drawer = styled(MuiDrawer, {
		shouldForwardProp: prop => prop !== 'open',
	})(({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}));

	return (
		<Drawer variant="permanent" open={open}>
			<DrawerHeader
				style={{
					height: appBarHeight,
					display: 'flex',
					justifyContent: 'space-around',
				}}
			>
				{open && (
					<Typography variant="h4" letterSpacing={2} color="inherit">
						ADMINIS
					</Typography>
				)}
				<IconButton
					onClick={handleDrawerClose}
					sx={{ ...(!open && { display: 'none' }) }}
				>
					{theme.direction === 'rtl' ? (
						<ChevronRightIcon />
					) : (
						<ChevronLeftIcon />
					)}
				</IconButton>
			</DrawerHeader>
			<Divider />
			{open && (
				<Box
					display={'flex'}
					flexDirection="column"
					justifyContent={'center'}
					alignItems={'center'}
					mt={'15px'}
				>
					<Avatar
						alt="my-avatar"
						src={stev}
						sx={{
							width: '60px',
							height: '60px',
							backgroundSize: 'cover',
							backgroundColor: colors.primary[500],
						}}
					/>
					<Typography variant="h4" fontWeight="bold" color="inherit" mt={1}>
						S.Refaay
					</Typography>
					<Typography variant="h6" color={colors.greenAccent[500]} gutterBottom>
						VP Fancy Admin
					</Typography>
				</Box>
			)}

			<List>
				{[{ text: 'Dashboard', link: '/', icon: <HomeIcon /> }].map(
					(item, index) => (
						<ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? 'initial' : 'center',
									px: 2.5,
								}}
								LinkComponent="a"
								href={item.link}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : 'auto',
										justifyContent: 'center',
									}}
								>
									{item.icon}
								</ListItemIcon>
								<ListItemText
									primary={item.text}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					)
				)}
			</List>
			<Divider />
			{open && (
				<Typography variant="h6" m="10px 0 0 15px" color={colors.grey[500]}>
					Data
				</Typography>
			)}

			<List>
				{[
					{
						text: 'Manage Team',
						link: '/team',
						icon: <Diversity3OutlinedIcon />,
					},
					{
						text: 'Contacts Information',
						link: '/contacts',
						icon: <ContactsOutlinedIcon />,
					},
					{ text: 'Invoices', link: '/invoices', icon: <ReceiptIcon /> },
				].map((item, index) => (
					<ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? 'initial' : 'center',
								px: 2.5,
							}}
							LinkComponent="a"
							href={item.link}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								{item.icon}
							</ListItemIcon>
							<ListItemText
								primary={item.text}
								sx={{ opacity: open ? 1 : 0 }}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			{open && (
				<Typography variant="h6" m="10px 0 0 15px" color={colors.grey[500]}>
					Pages
				</Typography>
			)}
			<List>
				{[
					{
						text: 'Profile Form',
						link: '/profile',
						icon: <Person2OutlinedIcon />,
					},
					{
						text: 'Calendar',
						link: '/calendar',
						icon: <CalendarTodayOutlinedIcon />,
					},
					{ text: 'FAQ Page', link: '/faq', icon: <HelpOutlineOutlinedIcon /> },
				].map((item, index) => (
					<ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? 'initial' : 'center',
								px: 2.5,
							}}
							LinkComponent="a"
							href={item.link}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								{item.icon}
							</ListItemIcon>
							<ListItemText
								primary={item.text}
								sx={{ opacity: open ? 1 : 0 }}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			{open && (
				<Typography variant="h6" m="10px 0 0 15px" color={colors.grey[500]}>
					Charts
				</Typography>
			)}
			<List>
				{[
					{ text: 'Bar Chart', link: '/bar', icon: <BarChartOutlinedIcon /> },
					{ text: 'Pie Chart', link: '/pie', icon: <PieChartOutlinedIcon /> },
					{ text: 'Line Chart', link: '/line', icon: <TimelineOutlinedIcon /> },
					{ text: 'Geography Chart', link: '/geo', icon: <MapOutlinedIcon /> },
				].map((item, index) => (
					<ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 48,
								justifyContent: open ? 'initial' : 'center',
								px: 2.5,
							}}
							LinkComponent="a"
							href={item.link}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
								}}
							>
								{item.icon}
							</ListItemIcon>
							<ListItemText
								primary={item.text}
								sx={{ opacity: open ? 1 : 0 }}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
