import React from 'react';
import Container from '../components/Container';
import styles from './registrationPage.module.css';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import Card from '../components/Card';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
const validationSchema = yup.object({
    id: yup.string('Should be a number').length(10, 'Must be 10 characters').required('Required'),
    lastName: yup.string().required('Required.'),
    firstName: yup.string().required('Required.'),
    middleName: yup.string().required('Required.'),
    college: yup.string().required('Required.'),
    program: yup.string().required('Required.'),
    yearLevel: yup.number('year level should be a number').required('Required.'),
    password: yup
        .string()
        .required('Required.')
        .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Password must contain at least 8 characters, one uppercase, one number and one special case character'),
    confirmPassword: yup
        .string()
        .required('Required')
        .oneOf([yup.ref('password'), undefined], 'Password does not match'),
});
function RegisterationPage(props) {
    const navigate = useNavigate();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            id: '',
            lastName: '',
            firstName: '',
            middleName: '',
            college: '',
            program: '',
            yearLevel: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (data) => {
            props.passData(data);
            console.log(data);
            toast.success('User successfully registered');
            navigate('/login');
        },
        validationSchema: validationSchema,
    });
    return (
        <Container>
            <Card className={styles.signuppageContainer}>
                <div className={styles.formfieldContainer}>
                    <TextField
                        id="id"
                        label="Student Number"
                        variant="outlined"
                        type="number"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.id}
                        helperText={formik.touched.id && formik.errors.id}
                        error={formik.touched.id && Boolean(formik.errors.id)}
                        InputHelperTextProps={{ style: { fontSize: 40 } }}
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        variant="outlined"
                        type="text"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    />
                    <TextField
                        id="firstName"
                        label="First Name"
                        variant="outlined"
                        type="text"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    />
                    <TextField
                        id="middleName"
                        label="Middle Name"
                        variant="outlined"
                        type="text"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.middleName}
                        helperText={formik.touched.middleName && formik.errors.middleName}
                        error={formik.touched.middleName && Boolean(formik.errors.middleName)}
                    />
                    <TextField
                        id="college"
                        label="College"
                        variant="outlined"
                        type="text"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.college}
                        helperText={formik.touched.college && formik.errors.college}
                        error={formik.touched.college && Boolean(formik.errors.college)}
                    />
                    <TextField
                        id="program"
                        label="Program Enrolled"
                        variant="outlined"
                        type="text"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.program}
                        helperText={formik.touched.program && formik.errors.program}
                        error={formik.touched.program && Boolean(formik.errors.program)}
                    />
                    <TextField
                        id="yearLevel"
                        label="Year Level"
                        variant="outlined"
                        type="text"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.yearLevel}
                        helperText={formik.touched.yearLevel && formik.errors.yearLevel}
                        error={formik.touched.yearLevel && Boolean(formik.errors.yearLevel)}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                    />
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    />
                    <div className={styles.btngroup}>
                        <Button variant="contained" sx={{ fontSize: 25 }} onClick={formik.handleSubmit}>
                            Register
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ fontSize: 25 }}
                            color="secondary"
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Card>
        </Container>
    );
}

export default RegisterationPage;
