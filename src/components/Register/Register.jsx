import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import useAxiosPublic from '../../Hooks/AxiosPublic';
import axios from 'axios';


const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, setUser, updateProfiles } = useContext(AuthContext);

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { name, email };

        try {
            // Step 1: Create Firebase User
            const userCredential = await createUser(email, password);
            const user = userCredential.user;
            setUser(user);

            // Step 2: Update Firebase User Profile
            await updateProfiles({ displayName: name });

            // Step 3: Save User to Database AFTER profile update
            await axios.post('http://localhost:5000/user', userInfo);

            // Step 4: Show success message & navigate
            toast.success("Account Created Successfully!");
            navigate('/');
        } catch (error) {
            console.error("Error:", error);
            toast.error(`Registration failed: ${error.message}`);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-base-200 p-4">
            <div className="card w-full max-w-sm shadow-xl bg-base-100">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-center">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Enter your name"
                                className="input input-bordered"
                                required
                            />
                        </div>
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
                            <button className="btn btn-primary w-full">Register</button>
                        </div>
                    </form>
                    <h2> Have Your Account? <Link to='/login' className='underline'>Login Account!</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Register;
