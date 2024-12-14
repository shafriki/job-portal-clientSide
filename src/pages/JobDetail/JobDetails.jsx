import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();

    return (
        <div>
            <p>job details {job.title}</p>
            <Link to={`/jobApply/${job._id}`}><button>Apply</button></Link>
        </div>
    );
};

export default JobDetails;