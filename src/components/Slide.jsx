import { Link } from 'react-router-dom';

const Slide = ({ bg, text }) => {
    return (
        <div>
            <div className="w-full bg-center bg-cover h-[30rem] md:h-[38rem]"
                style={{ backgroundImage: `url(${bg})` }}>

                <div className="flex items-center justify-center w-full h-full bg-gray-900/50">
                    <div className="text-center">
                        <h1 className="text-xl md:text-3xl font-semibold text-white lg:text-4xl w-3/4 md:w-auto mx-auto">{text}</h1>
                        <Link to='/add-job'><button className="w-fit px-5 py-2 mt-4 text-xs md:text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-blue-500">
                            Post job and Hire Expert</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slide;