// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slideBg1 from "../assets/images/carousel1.jpg";
import slideBg2 from "../assets/images/carousel2.jpg";
import slideBg3 from "../assets/images/carousel3.jpg";

const text1 = 'Get Your Web Development Projects Done in minutes'
const text2 = 'Get Your Graphics Design Projects Done in minutes'
const text3 = 'Start Your Digital Marketing Campaigns up n running'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

export default function Carousel() {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide bg={slideBg1} text={text1} /></SwiperSlide>
                <SwiperSlide><Slide bg={slideBg2} text={text2} /></SwiperSlide>
                <SwiperSlide><Slide bg={slideBg3} text={text3} /></SwiperSlide>
            </Swiper >
        </>
    );
}
