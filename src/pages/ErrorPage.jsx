import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <section className='bg-white '>
            <div className='container max-w-fit min-h-screen px-6 py-6 mx-auto flex items-center lg:gap-12 relative'>

                <div className='w-fit md:w-1/2 lg:w-1/2 absolute md:static md:p-0 left-14 md:left-auto md:top-auto md:bg-transparent z-10' >
                    <p className='text-sm font-medium text-gray-200 md:text-gray-500'>404 error</p>
                    <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
                        Page not found
                    </h1>
                    <p className='mt-4 text-gray-200 md:text-gray-500 dark:text-gray-400 text-wrap w-4/5 md:w-auto '>
                        Sorry, the page you are looking for doesnt exist.Here are some
                        helpful links:
                    </p>

                    <div className='flex items-center mt-6 gap-x-3 text-nowrap  w-fit'>

                        <Link to={-1} className="rounded-lg w-1/2">
                            <button className='flex items-center justify-center w-full px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white  rounded-lg gap-x-2 sm:w-auto hover:bg-gray-100 '>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    strokeWidth='1.5'
                                    stroke='currentColor'
                                    className='w-5 h-5 rtl:rotate-180'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                                    />
                                </svg>

                                <span className="">Go back</span>
                            </button>
                        </Link>

                        <Link to="/" className=" rounded-lg w-1/2">
                            <button className=' px-5 py-2 text-xs md:text-sm tracking-wide text-white transition-colors duration-200  md:bg-gray-500  border md:border-0 rounded-lg shrink-0 sm:w-auto hover:bg-gray-500/30 md:hover:bg-gray-600'>
                                Take me home</button>
                        </Link>
                    </div>
                </div>

                <div className='w-full mt-8 md:w-1/2 lg:w-1/2 lg:mt-0 blur-[2px] md:blur-0'>
                    <img
                        className=' w-full h-fit lg:h-[32rem] md:h-96 rounded-lg object-cover '
                        src='https://images.unsplash.com/photo-1613310023042-ad79320c00ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                        alt=''
                    />
                </div>
            </div>
        </section>
    )
}

export default ErrorPage;