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
import MyBids from '../pages/MyBids';
import AllJobs from '../pages/AllJobs';
import BidRequests from '../pages/BidRequests';
import PrivateRoute from '../PricvateRoute/PrivateRoute';
const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
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
            }, {
                path: '/all-jobs',
                element: <AllJobs />,
            },
            {
                path: '/add-job',
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: '/job/:id',
                element: <PrivateRoute><JobDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/my-posted-jobs',
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>,
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateJob /></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: '/my-bids',
                element: <PrivateRoute><MyBids /></PrivateRoute>,
                // loader: () => fetch(`${import.meta.env.VITE_API_URL}/bids`)
            }, {
                path: '/bid-requests',
                element: <PrivateRoute><BidRequests /></PrivateRoute>,
            }
        ]
    }
])
export default router;