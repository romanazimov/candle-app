import './Testimonials.scss'
import Review from "../components/Testimonials/Review"
import img1 from '../assets/Testimonials/Julie.png';
import img2 from '../assets/Testimonials/Eduardo.png';
import img3 from '../assets/Testimonials/Victoria.png';
import { Swiper, SwiperSlide,  } from 'swiper/react';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Testimonials() {
    return(
        <section id='Testimonials'>
            <div className='container'>
                <p className='title'>Testimonials</p>
                <p className='description'>Some quotes from our happy customers</p>
                {/* <div className='review-cont'>
                    <Review info={{img: img1, rating: 4.5, review: '"I love it! No more air fresheners"', author: "Julie"}}/>
                    <Review info={{img: img2, rating: 5, review: '"Recommended for everyone, the perfect candles"', author: "Eduardo"}}/>
                    <Review info={{img: img3, rating: 4.5, review: '"Smells great! I love that it lasts a while"', author: "Victoria"}}/>
                </div> */}
                <Swiper className='review-cont'
                    modules = {[Navigation, Pagination, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    pagination = {{ clickable: true}}
                    autoplay = {{
                        delay:5000
                    }}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        1150: {
                            slidesPerView: 3,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    >
                    <SwiperSlide><Review info={{img: img1, rating: 4.5, review: '"I love it! No more air fresheners"', author: "Julie"}}/></SwiperSlide>
                    <SwiperSlide><Review info={{img: img2, rating: 5, review: '"Recommended for everyone, the perfect candles"', author: "Eduardo"}}/></SwiperSlide>
                    <SwiperSlide><Review info={{img: img3, rating: 4.5, review: '"Smells great! I love that it lasts a while"', author: "Victoria"}}/></SwiperSlide>
                </Swiper>
                {/* <div className="swiper-button-next"></div> */}
                {/* <div className="swiper-button-prev"></div> */}
            </div>
        </section>
    )
}

export default Testimonials