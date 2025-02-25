import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
    const { loginUser, setUser, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state ? location.state : '/');
                toast.success('Login Successfully');
            })
            .catch((error) => {
                toast.error(`Login Unsuccessful: ${error.message}`);
            });
        console.log({ name, email, password });
    };
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
                // axios.post('https://gadget-heaven-server-alpha.vercel.app/user', userInfo);
                navigate('/');
                toast.success("Logged in with Google successfully!");
            })
            .catch((error) => {
                console.error("Google Login Error:", error);
                toast.error(error.message);
            });
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
            <div className="card w-full max-w-sm shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="Enter your email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="Enter your password"
                                className="input input-bordered"
                                required
                            />

                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary w-full">Login</button>
                        </div>
                    </form>
                    <button className="btn mt-4" onClick={handleGoogleLogin}>
                        <FaGoogle className="mr-2" /> Sign Up with Google
                    </button>
                    <h2>Don't Have Account? <Link to='/registers' className='underline'>Create Account!</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;