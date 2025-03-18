import React from 'react';
import Carousel from '../components/Carousel';
import TabsSection from '../components/TabsSection';

const Home = () => {
    return (
        <div className='font-lato mx-4 lg:mx-auto'>
            <Carousel />
            <TabsSection />
        </div>
    );
};

export default Home;