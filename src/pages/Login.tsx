import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { loginSchema } from '../schema/account';

const initialValues = {
    email: '',
    password: '',
};

const Login = () => {
    const handleSubmit = (values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) => {
        console.log(values);
        console.log(actions);
    };

    return (
        <Box width="350px" m={8}>
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
                            handleBlur={handleBlur}
                        />
                        <Box height={14} />
                        <Field
                            name="password"
                            type="password"
                            label="Password"
                            as={TextField}
                            fullWidth
                            handleBlur={handleBlur}
                        />
                        <Box height={20} />
                        <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                            Sign in
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default Login;
