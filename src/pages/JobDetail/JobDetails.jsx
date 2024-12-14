import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();

    return (
        <div>
            job details {job.title}
        </div>
    );
};

export default JobDetails;