import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import Topbar from './scenes/Global/Topbar';
import { Routes, Route } from 'react-router-dom';
import Dashborad from './scenes/Dashborad/index';
import Sidebar from './scenes/Global/Sidebar';
import { useState } from 'react';
import User from './scenes/User/User';

function App() {
	const drawerWidth = 240;
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
					<div style={{ display: 'flex' }}>
						<Sidebar
							drawerWidth={drawerWidth}
							open={open}
							handleDrawerClose={handleDrawerClose}
						/>
						<main
							className="content"
							sx={{ flexGrow: 1, p: 3, border: '2px solid red' }}
						>
							<Routes>
								<Route path="/" element={<Dashborad />} />
								{/* <Route path="/teams" element={<Teams />} /> */}
								{/* <Route path="/contracts" element={<Contracts />} /> */}
								{/* <Route path="/invoices" element={<Invoices />} /> */}
								{/* <Route path="/profile" element={<Profile />} /> */}
								{/* <Route path="/calendar" element={<Calendar />} /> */}
								{/* <Route path="/profile" element={<User />} /> */}
								{/* <Route path="/bar" element={<Bar />} /> */}
								{/* <Route path="/pie" element={<Pie />} /> */}
								{/* <Route path="/line" element={<Line />} /> */}
								{/* <Route path="/geo" element={<Geography />} /> */}
							</Routes>
						</main>
					</div>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
