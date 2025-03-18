import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';


const TabsSection = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/all-jobs`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>Browse Jobs By Categories</h1>
                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500'>Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.

                </p>
                <div className="flex justify-center items-center">
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphic Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className="flex flex-wrap gap-5 ">
                        {
                            jobs.map(job => <JobCard key={job._id} job={job} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </div>

        </Tabs>
    );
};

export default TabsSection;