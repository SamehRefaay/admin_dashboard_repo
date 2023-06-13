import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { mockBarData as data } from '../data/mockData';
import { tokens } from '../theme';

const BarChart = ({ isDashboard = false }) => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	const isMobile = useMediaQuery('(max-width:600px)');

	console.log(isMobile);

	return (
		<ResponsiveBar
			data={data}
			theme={{
				// added
				axis: {
					domain: {
						line: {
							stroke: colors.grey[100],
						},
					},
					legend: {
						text: {
							fill: colors.grey[100],
						},
					},
					ticks: {
						line: {
							stroke: colors.grey[100],
							strokeWidth: 1,
						},
						text: {
							fill: colors.grey[100],
						},
					},
				},
				legends: {
					text: {
						fill: colors.grey[100],
					},
				},
			}}
			keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
			indexBy="country"
			margin={
				isMobile
					? { top: 30, right: 20, bottom: 50, left: 30 }
					: isDashboard
					? { top: 30, right: 20, bottom: 50, left: 30 }
					: { top: 50, right: 130, bottom: 50, left: 60 }
			}
			padding={0.3}
			valueScale={{ type: 'linear' }}
			indexScale={{ type: 'band', round: true }}
			colors={{ scheme: 'nivo' }}
			defs={[
				{
					id: 'dots',
					type: 'patternDots',
					background: 'inherit',
					color: '#38bcb2',
					size: 4,
					padding: 1,
					stagger: true,
				},
				{
					id: 'lines',
					type: 'patternLines',
					background: 'inherit',
					color: '#eed312',
					rotation: -45,
					lineWidth: 6,
					spacing: 10,
				},
			]}
			borderColor={{
				from: 'color',
				modifiers: [['darker', '1.6']],
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: isDashboard ? undefined : 'country', // changed
				legendPosition: 'middle',
				legendOffset: 32,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: isDashboard ? undefined : 'food', // changed
				legendPosition: 'middle',
				legendOffset: -40,
			}}
			enableLabel={false}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: 'color',
				modifiers: [['darker', 1.6]],
			}}
			legends={
				isMobile || isDashboard
					? [
							{
								dataFrom: 'keys',
								anchor: 'top-right',
								direction: 'row',
								justify: false,
								translateX: 0,
								translateY: -20,
								itemsSpacing: 1,
								itemWidth: 40,
								itemHeight: 20,
								itemDirection: 'top-to-bottom',
								itemOpacity: 0.85,
								symbolSize: 10,
							},
					  ]
					: [
							{
								dataFrom: 'keys',
								anchor: 'bottom-right', //`${isMobile ? undefined : 'bottom-right'}`
								direction: 'column',
								justify: false,
								translateX: 120,
								translateY: 0,
								itemsSpacing: 2,
								itemWidth: 120,
								itemHeight: 20,
								itemDirection: 'left-to-right',
								itemOpacity: 0.85,
								symbolSize: 20,
								effects: [
									{
										on: 'hover',
										style: {
											itemOpacity: 1,
										},
									},
								],
							},
					  ]
			}
			role="application"
			barAriaLabel={function (e) {
				return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
			}}
		/>
	);
};

export default BarChart;
