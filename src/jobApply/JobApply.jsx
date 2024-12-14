import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const cv = form.cv.value;

        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            cv,
            name,
        };

        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobApplication),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your application has been submitted successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK',
                    });
                }
            })
            .catch((err) => {
                console.error('Error:', err);
                Swal.fire({
                    title: 'Error!',
                    text: 'Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Job Application
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="linkedin"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        LinkedIn URL
                    </label>
                    <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        placeholder="https://linkedin.com/in/your-profile"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="github"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        GitHub URL
                    </label>
                    <input
                        type="url"
                        id="github"
                        name="github"
                        placeholder="https://github.com/your-username"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="cv"
                        className="block text-gray-700 font-medium mb-2"
                    >
                        CV URL
                    </label>
                    <input
                        type="url"
                        id="cv"
                        name="cv"
                        placeholder="https://example.com/your-cv.pdf"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JobApply;
