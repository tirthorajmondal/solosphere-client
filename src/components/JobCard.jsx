import React from 'react';

const JobCard = ({ job }) => {
    const handleDelete = () => {
        fetch(`${import.meta.env.VITE_API_URL}/job/${job._id}`, {
            method: "DELETE"
        })
    }

    return (
        <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 my-2 relative">
            <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-800 dark:text-gray-400">{job?.category}</span>
                <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">{job.deadline}</span>
            </div>

            <div>
                <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">{job?.title}</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{job?.description}</p>
            </div>

            <div>
                <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                    <span>Price Range:</span>
                    <span className="mx-2 text-blue-600 dark:text-blue-400">{job?.priceRange}</span>
                </div>
            </div>
            <div
                onClick={handleDelete}
                className="absolute bottom-3 right-3 px-2 py-0.5 hover:scale-105 cursor-pointer bg-red-300 rounded-full">X</div>
        </div>
    );
};

export default JobCard;