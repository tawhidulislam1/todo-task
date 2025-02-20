import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import { toast } from 'react-toastify'; // Import toast for notifications

const Register = () => {
    const { createUser, setUser, updateProfiles } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;

        const password = form.password.value;

        createUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);  // Set the user globally in the context
                console.log(user);

                updateProfiles({ displayName: name }) // Update the profile with the user's name
                    .then(() => {
                        toast.success("Account Created Successfully!"); // Success notification
                        navigate('/');
                    })
                    .catch((error) => {
                        console.error("Profile update failed:", error);
                        toast.error("Account created, but profile update failed. Please update manually."); // Failure notification
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error(errorMessage);
                toast.error(`Registration failed: ${errorMessage}`); // Show error notification if registration fails
            });

        console.log({ name, email, password });
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
