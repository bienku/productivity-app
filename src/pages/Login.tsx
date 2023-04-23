import React from 'react';
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { loginSchema } from '../schema/account';
import useAuth from '../hooks/useAuth';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
    const { signIn } = useAuth();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {
        signIn(values.email, values.password);
    };

    return (
        <Container>
            <Box display="flex" alignItems="center" justifyContent="center" height="90vh">
                <Box width="350px" m={8}>
                    <Typography variant="h3" textAlign="center" mb={3}>
                        Login
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values, actions) => handleSubmit(values, actions)}
                        validationSchema={loginSchema}
                    >
                        {({ handleBlur }) => (
                            <Form>
                                <Field
                                    name="email"
                                    type="email"
                                    label="Email"
                                    as={TextField}
                                    fullWidth
                                    onBlur={handleBlur}
                                />
                                <Box height={14} />
                                <Field
                                    name="password"
                                    type="password"
                                    label="Password"
                                    as={TextField}
                                    fullWidth
                                    onBlur={handleBlur}
                                />
                                <Box height={20} />
                                <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                                    Sign in
                                </Button>
                            </Form>
                        )}
                    </Formik>

                    <Typography mt={3} textAlign="center">
                        Need an account?
                        <Link component={RouterLink} to="/register" pl={1}>
                            Sign up
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
