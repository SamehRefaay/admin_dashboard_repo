import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className="app">
					<main className="content" />
				</div>
			</ThemeProvider>
		</ColorModeContext>
	);
}

export default App;
