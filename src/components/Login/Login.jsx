import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext);
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
                    <h2>Don't Have Account? <Link to='/registers' className='underline'>Create Account!</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Login;