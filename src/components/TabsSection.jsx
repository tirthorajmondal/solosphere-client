import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios'


const TabsSection = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/all-jobs`)
            setJobs(data)
        }
        getData()
    }, [])
    return (
        <Tabs>
            <div className='container px-6 py-10 mx-auto'>
                <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>Browse Jobs By Categories</h1>
                <p className='max-w-2xl mx-auto my-6 text-center text-gray-500'>Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.

                </p>
                <div className="flex justify-center items-center">
                    <TabList>
                        <Tab>Web Developer</Tab>
                        <Tab>Graphics Designer</Tab>
                        <Tab>Digital Marketer</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className="flex mt-4 flex-wrap gap-5 ">
                        {
                            jobs.filter(j => j.category === 'Web Development').map(job => <JobCard key={job._id} job={job} jobs={jobs} setJobs={setJobs} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex mt-4 flex-wrap gap-5 ">
                        {
                            jobs.filter(j => j.category === 'Graphics Design').map(job => <JobCard key={job._id} job={job} jobs={jobs} setJobs={setJobs} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex mt-4 flex-wrap gap-5 ">
                        {
                            jobs.filter(j => j.category === 'Digital Marketing').map(job => <JobCard key={job._id} job={job} jobs={jobs} setJobs={setJobs} />)
                        }
                    </div>
                </TabPanel>
            </div>

        </Tabs>
    );
};

export default TabsSection;