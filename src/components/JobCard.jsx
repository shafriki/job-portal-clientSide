import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    const {
        title,
        company,
        company_logo,
        requirements,
        description,
        location,
        salaryRange,
        timePosted,
        _id
    } = job;

    // Destructure salaryRange object (min, max, currency)
    const { min, max, currency } = salaryRange || {};

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-80">
            <div className="flex items-center gap-4 mb-4">
                <img src={company_logo} alt={company} className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="text-lg font-semibold">{company}</h2>
                    <p className="text-gray-500 text-sm">{location}</p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>

            <div className="text-gray-500 text-sm flex items-center gap-2 mb-4">
                <span className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 6.75h7.5m-7.5 5.25h7.5m-7.5 5.25h7.5"
                        />
                    </svg>
                    Fulltime
                </span>
                <span className="flex items-center gap-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 10.5h5.25m-5.25 0l2.25 2.25m0-4.5l-2.25 2.25m14.25 7.5H13.5m5.25 0l-2.25 2.25m0-4.5l2.25 2.25"
                        />
                    </svg>
                    {timePosted}
                </span>
            </div>

            <p className="text-gray-600 text-sm mb-4">
                {description.length > 100 ? `${description.substring(0, 100)}...` : description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {requirements.map((req, index) => (
                    <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                        {req}
                    </span>
                ))}
            </div>

            <div className="flex justify-between items-center">
                <p className="text-blue-600 font-bold text-lg">
                    {min && max ? `${currency} ${min} - ${currency} ${max}/Hour` : 'Salary Info Unavailable'}
                </p>
                <Link to={`/jobs/${_id}`}>
                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700">
                    Apply Now
                </button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
