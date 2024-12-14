import React, { useEffect, useState } from 'react';
import { data } from 'react-router-dom';
import JobCard from './JobCard';

const HotJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/jobs')
        .then(res => res.json())
        .then(data =>{
            setJobs(data);
        })
    },[])

    return (
        <div className='grid grid-cols-4 gap-20 my-10 max-w-screen-xl mx-auto'>
            {
                jobs.map(job =><JobCard key={job._id} job={job}></JobCard>)
            }
        </div>
    );
};

export default HotJobs;