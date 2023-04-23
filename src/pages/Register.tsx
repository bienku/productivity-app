import React from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { registerSchema } from '../schema/account';
import useAuth from '../hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';

const Register = () => {
    const { signUp } = useAuth();

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {
        signUp(values.email, values.password);
    };

    return (
        <Container>
            <Box display="flex" alignItems="center" justifyContent="center" height="90vh">
                <Box width="350px" m={8}>
                    <Typography variant="h3" textAlign="center" mb={3}>
                        Register
                    </Typography>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => handleSubmit(values, actions)}
                        validationSchema={registerSchema}
                    >
                        {({ errors, touched, isValid, dirty }) => (
                            <Form>
                                <Field
                                    name="email"
                                    type="email"
                                    label="Email"
                                    as={TextField}
                                    fullWidth
                                    error={errors.email && touched.email}
                                    helperText={Boolean(touched.email) && errors.email}
                                />
                                <Box height={14} />
                                <Field
                                    name="password"
                                    type="password"
                                    label="Password"
                                    as={TextField}
                                    fullWidth
                                    error={errors.password && touched.password}
                                    helperText={Boolean(touched.password) && errors.password}
                                />
                                <Box height={14} />
                                <Field
                                    name="confirmPassword"
                                    type="password"
                                    label="Confirm Password"
                                    as={TextField}
                                    fullWidth
                                    error={errors.confirmPassword && touched.confirmPassword}
                                    helperText={Boolean(touched.confirmPassword) && errors.confirmPassword}
                                />
                                <Box height={20} />
                                <Button
                                    disabled={!isValid || !dirty}
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                >
                                    Sign up
                                </Button>
                            </Form>
                        )}
                    </Formik>

                    <Typography mt={3} textAlign="center">
                        Already have an account?
                        <Link component={RouterLink} to="/login" pl={1}>
                            Log in
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Register;
