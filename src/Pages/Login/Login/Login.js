import React, { useState } from 'react';
import { InputGroup,FormControl,Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    
    const {
        handleUserLogin,
        handleUserRegistration,
        signInGoogle
    } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRegister = () => {
        handleUserRegistration(email,password);
    }
    const handleLogin = () => {
        handleUserLogin(email,password);
    }
    return (
        <div>
            <div className='mx-4 mt-4'>
            <h2>Please Login</h2>
            <InputGroup className="mb-3">
                <FormControl
                onChange={handleEmail}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1" required 
                />
            </InputGroup>
            <InputGroup className="mb-3 ">
                <FormControl
                onChange={handlePassword}
                placeholder="Password"
                type='password'
                aria-describedby="basic-addon2" required 
                />
            </InputGroup>
            </div>
            
            <div className='buttons mt-3'>
                <button className='btn btn-primary mx-3' onClick={handleRegister}>Register</button>
                <button className='btn btn-success mx-3' onClick={handleLogin}>Login</button>
                <Button onClick={signInGoogle}>Google SignIn</Button>
            </div> 
        </div>
    );
};

export default Login;
