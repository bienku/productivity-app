import React from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { Box, Button, TextField } from '@mui/material';
import { registerSchema } from '../schema/account';

const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
};

const Register = () => {
    const handleSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {
        console.log(values);
        console.log(actions);
    };

    return (
        <Box width="350px" m={8}>
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
        </Box>
    );
};

export default Register;
