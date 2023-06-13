import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import {
	Box,
	IconButton,
	InputBase,
	Toolbar,
	useMediaQuery,
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { ColorModeContext, tokens } from '../../theme';
import SearchIcon from '@mui/icons-material/Search';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Topbar = ({ drawerWidth, open, handleDrawerOpen }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const colorMode = useContext(ColorModeContext);
	const isMobile = useMediaQuery('(max-width:600px)');

	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: prop => prop !== 'open',
	})(({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),

		...(open && {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(['width', 'margin'], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	return (
		<AppBar position="fixed" open={open}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					sx={{
						marginRight: 5,
						...(open && { display: 'none' }),
					}}
				>
					<MenuIcon
						style={{
							filter: theme.palette.mode === 'light' && 'invert(1)',
						}}
					/>
				</IconButton>
				<Box
					display="flex"
					justifyContent={isMobile ? 'flex-start' : 'space-between'}
					p={!isMobile ? 2 : '2 1'}
					width={'100%'}
				>
					{/* SEARCH BAR */}

					<Box
						display="flex"
						backgroundColor={colors.primary[500]}
						borderRadius={'3px'}
					>
						<InputBase
							sx={{ ml: isMobile ? 1 : 2, flex: 1 }}
							placeholder="Search"
						>
							<IconButton>
								<SearchIcon />
							</IconButton>
						</InputBase>
					</Box>

					{/* ICONS BOX */}
					<Box display="flex">
						<IconButton onClick={colorMode.toggleColorMode}>
							{theme.palette.mode === 'light' ? (
								<NightlightOutlinedIcon />
							) : (
								<DarkModeOutlinedIcon />
							)}
						</IconButton>
						<IconButton>
							<NotificationsOutlinedIcon />
						</IconButton>

						<IconButton>
							<SettingsOutlinedIcon />
						</IconButton>
						<IconButton>
							<PersonOutlineOutlinedIcon />
						</IconButton>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
