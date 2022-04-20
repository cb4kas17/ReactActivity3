import React, { useState } from 'react';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegisterationPage';
import HomePage from './pages/HomePage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from './assets/bg.avif';

toast.configure();
function App() {
    const [users, setUsers] = useState([{}]);
    const [user, setUser] = useState({});

    const passData = (data) => {
        setUsers([...users, data]);
    };
    console.log('user ', user);
    const login = (data) => {
        users.forEach((item) => {
            console.log(item.id, data.id);
            console.log(item.password, data.password);
            if (item.id == data.id && item.password == data.password) {
                setUser(item);
                console.log('found');
            }
        });
    };
    return (
        <div className="container">
            <img src={bg} alt="" className="bgimg" />
            <BrowserRouter>
                <ToastContainer style={{fontSize: "1.5rem"}}/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage login={login} users={users} />} />
                    <Route path="/signup" element={<RegistrationPage passData={passData} />} />
                    <Route path="/welcome" element={<WelcomePage user={user} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
