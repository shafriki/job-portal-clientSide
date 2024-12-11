import React from 'react';
import registerLottie from '../../assets/Animation - 1733955248277.json';
import Lottie from 'lottie-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        let showToast = false;

        // Password validations
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.", {
                position: "top-center",
            });
            showToast = true;
        }

        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter.", {
                position: "top-center",
            });
            showToast = true;
        }

        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter.", {
                position: "top-center",
            });
            showToast = true;
        }

        if (showToast) {
            return;
        }

        console.log(password, email);
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-7xl">
                <div className="text-center lg:text-left w-full lg:w-1/2 p-4">
                    <Lottie animationData={registerLottie} className="max-w-full h-auto" />
                </div>
                <div className="card bg-base-100 w-full lg:w-1/2 max-w-md mx-auto shadow-2xl p-6">
                    <h1 className="text-2xl text-center font-bold mb-4">Register Here</h1>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
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
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full">Register</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;
