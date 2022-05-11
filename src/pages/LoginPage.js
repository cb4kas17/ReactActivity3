import React, { useState } from 'react';
import Container from '../components/Container';
import styles from './loginPage.module.css';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import Card from '../components/Card';
function LoginPage(props) {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [invalid, setInvalid] = useState(false);

    const loginHandler = () => {
        const data = { id: id, password: pw };
        props.login(data);
        props.users.forEach((item) => {
            if (item.id == id && item.password == pw) {
                navigate('/welcome');
            } else {
                setInvalid(true);
            }
        });
        if (props.userFound) {
            navigate('/welcome');
        }
    };
    return (
        <Container>
            <Card className={styles.loginpageContainer}>
                <div className={styles.formfieldContainer}>
                    <TextField
                        id="outlined-basic"
                        label="Student Number"
                        variant="outlined"
                        type="text"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                        value={id}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type="password"
                        sx={{ width: '80%' }}
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        onChange={(e) => {
                            setPw(e.target.value);
                        }}
                        value={pw}
                    />
                    {invalid && <div className={styles.invalid}>Invalid login</div>}
                    <div className={styles.btngroup}>
                        <Button variant="contained" sx={{ fontSize: 25 }} onClick={loginHandler}>
                            Login
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

export default LoginPage;
