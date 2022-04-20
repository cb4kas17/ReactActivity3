import React from 'react';
import Container from '../components/Container';
import styles from './welcomePage.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '../components/Card';
function WelcomePage(props) {
    const navigate = useNavigate();
    console.log(props.user);
    return (
        <Container>
            <Card className={styles.welcomeContainer}>
                <h1 className={styles.header}>Welcome to our school! {props.user && props.user.lastName + ', ' + props.user.firstName}</h1>
                <p className={styles.description}>Student Number: {props.user && props.user.id} </p>
                <p className={styles.description}>College: {props.user && props.user.college} </p>
                <p className={styles.description}>Program: {props.user && props.user.program} </p>
                <p className={styles.description}>Year level: {props.user && props.user.yearLevel} </p>
                <p className={styles.footer}>Enjoy your stay in our school. God bless! </p>
                <div className={styles.btngroup}>
                    <Button
                        variant="contained"
                        sx={{ fontSize: 25 }}
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        Logout
                    </Button>
                </div>
            </Card>
        </Container>
    );
}

export default WelcomePage;
