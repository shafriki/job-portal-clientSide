import React, { useEffect, useState } from 'react';
import useAuth from '../auth/useAuth';

const MyApplications = () => {
    const {user} = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            setJobs(data)
        })
    }, [user.email])

    return (
        <div>
            my app {jobs.length}
        </div>
    );
};

export default MyApplications;