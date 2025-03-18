import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import logo from "../assets/images/logo.png"

const Navbar = () => {
    const { user, logOut } = useAuth();
    return (
        <div className='navbar bg-base-100 shadow-sm container max-w-[1536px] px-4 w-full mx-auto'>
            <div className='flex-1'>
                <div className="">
                    <Link to='/' className='flex gap-2 items-center w-fit'>
                        <img className='w-auto h-7' src={logo} alt='' />
                        <span className='font-bold'>SoloSphere</span>
                    </Link>
                </div>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1 text-xs'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/all-jobs'>All Jobs</Link>
                    </li>

                    {
                        !user &&
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    }
                </ul>

                {
                    user && <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost p-0.5 btn-circle avatar w-8 h-8 md:h-auto md:w-10'
                        >
                            <div className='w-7 md:w-10 rounded-full' title={user?.displayName}>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src={user?.photoURL}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <div className='justify-between'>Add Job</div>
                            </li>
                            <li>
                                <div>My Posted Jobs</div>
                            </li>
                            <li>
                                <div>My Bids</div>
                            </li>
                            <li>
                                <div>Bid Requests</div>
                            </li>
                            <li className='mt-2'>
                                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar;