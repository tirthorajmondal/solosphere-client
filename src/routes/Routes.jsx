import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layouts/Root';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddJob from '../pages/AddJob';
import JobDetails from '../pages/JobDetails';
import MyPostedJobs from '../pages/MyPostedJobs';
import UpdateJob from '../pages/UpdateJob';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/add-job',
                element: <AddJob />
            },
            {
                path: '/job/:id',
                element: <JobDetails />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/my-posted-jobs',
                element: <MyPostedJobs />,
            },
            {
                path: '/update/:id',
                element: <UpdateJob />,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
        ]
    }
])
export default router;