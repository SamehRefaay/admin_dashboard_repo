import { Box, Grid, TextField, useTheme } from '@mui/material';
import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import Header from '../../components/Header';
import { tokens } from '../../theme';

const Profile = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const handleFormSubmit = values => {
		console.log(values);
	};

	const initialValues = {
		firstName: '',
		lastName: '',
		email: '',
		contact: '',
		address1: '',
		address2: '',
	};

	const phoneRegEx =
		/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

	const userSchema = yup.object().shape({
		firstName: yup.string().required('required'),
		lastName: yup.string().required('required'),
		email: yup.string().email('invalid email').required('required'),
		contact: yup
			.string()
			.matches(phoneRegEx, 'Phone number is not valid')
			.required('required'),
		address1: yup.string().required('required'),
		address2: yup.string().required('required'),
	});

	return (
		<Box p={2}>
			<Header title="CREATE USER" subtitle="Create a New User Profile" />
			<Box mt={4}>
				<Formik
					onSubmit={handleFormSubmit}
					initialValues={initialValues}
					validationSchema={userSchema}
				>
					{({
						values,
						errors,
						touched,
						handleBlur,
						handleChange,
						handleSubmit,
					}) => (
						<form onSubmit={handleSubmit}>
							<Grid container spacing={4}>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										variant="filled"
										type="text"
										label="First Name"
										name="firstName"
										value={values.firstName}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.firstName && !!errors.firstName}
										helperText={touched.firstName && errors.firstName}
									/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										fullWidth
										variant="filled"
										type="text"
										label="Last Name"
										name="lastName"
										value={values.lastName}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.lastName && !!errors.lastName}
										helperText={touched.lastName && errors.lastName}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant="filled"
										type="text"
										label="Email"
										name="email"
										value={values.email}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.email && !!errors.email}
										helperText={touched.email && errors.email}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant="filled"
										type="text"
										label="Contact Number"
										name="contact"
										value={values.contact}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.contact && !!errors.contact}
										helperText={touched.contact && errors.contact}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant="filled"
										type="text"
										label="Address 1"
										name="address1"
										value={values.address1}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.address1 && !!errors.address1}
										helperText={touched.address1 && errors.address1}
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										fullWidth
										variant="filled"
										type="text"
										label="Address 2"
										name="address2"
										value={values.address2}
										onBlur={handleBlur}
										onChange={handleChange}
										error={!!touched.address2 && !!errors.address2}
										helperText={touched.address2 && errors.address2}
									/>
								</Grid>
								<Grid item xs={12} sm={3}>
									<TextField
										fullWidth
										type="submit"
										onSubmit={handleSubmit}
										color="secondary"
										sx={{
											backgroundColor: colors.greenAccent[600],
											borderRadius: '5px',
											':hover': {
												backgroundColor: colors.greenAccent[500],
											},
										}}
									>
										Create New User
									</TextField>
								</Grid>
							</Grid>
						</form>
					)}
				</Formik>
			</Box>
		</Box>
	);
};

export default Profile;
