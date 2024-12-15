import React from 'react';

const AddJob = () => {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Add a New Job</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-gray-700">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="jobType" className="block text-gray-700">Job Type</label>
                    <input
                        type="text"
                        id="jobType"
                        name="jobType"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="deadline" className="block text-gray-700">Application Deadline</label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
                    Add Job
                </button>
            </form>
        </div>
    );
};

export default AddJob;
