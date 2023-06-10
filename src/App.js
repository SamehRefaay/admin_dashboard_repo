import { ColorModeContext, useMode } from './theme';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar';
import { useState } from 'react';
import {
	Dashborad,
	Team,
	Contacts,
	Invoices,
	Profile,
	Calendar,
	FAQ,
	Bar,
	Pie,
	Line,
} from './scenes';

function App() {
	const drawerWidth = 240;
	const appBarHeight = 69;
	const [theme, colorMode] = useMode();
	const [open, setOpen] = useState(true);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<Topbar
						drawerWidth={drawerWidth}
						open={open}
						handleDrawerOpen={handleDrawerOpen}
					/>
					<Box display="flex" width="100%">
						<Sidebar
							drawerWidth={drawerWidth}
							appBarHeight={appBarHeight}
							open={open}
							handleDrawerClose={handleDrawerClose}
						/>
						<main
							style={{
								width: '100%',
								marginTop: appBarHeight,
								height: `calc(100vh - ${appBarHeight})`,
							}}
							className="content"
						>
							<Routes>
								<Route path="/" element={<Dashborad />} />
								<Route path="/team" element={<Team />} />
								<Route path="/contacts" element={<Contacts />} />
								<Route path="/invoices" element={<Invoices />} />
								<Route path="/profile" element={<Profile />} />
								<Route path="/calendar" element={<Calendar />} />
								<Route path="/faq" element={<FAQ />} />
								<Route path="/bar" element={<Bar />} />
								<Route path="/pie" element={<Pie />} />
								<Route path="/line" element={<Line />} />
								{/* <Route path="/geo" element={<Geography />} /> */}
							</Routes>
						</main>
					</Box>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
