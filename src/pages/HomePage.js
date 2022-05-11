import React from 'react';
import Container from '../components/Container';
import styles from './homePage.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '../components/Card';
function HomePage() {
    const navigate = useNavigate();
    return (
        <Container>
            <Card className={styles.homepageContainer}>
                <h1 className={styles.header}>Christian School Portal</h1>
                <p className={styles.description}>Login if you have an account, othewise register to my school.</p>
                <div className={styles.btngroup}>
                    <Button
                        variant="contained"
                        sx={{ fontSize: 25 }}
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        Login
                    </Button>
                    <Button
                        variant="contained"
                        sx={{ fontSize: 25 }}
                        color="secondary"
                        onClick={() => {
                            navigate('/signup');
                        }}
                    >
                        Register
                    </Button>
                </div>
            </Card>
        </Container>
    );
}

export default HomePage;
