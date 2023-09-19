import './Testimonials.scss'
import Review from "../components/Testimonials/Review"
import img1 from '../assets/Testimonials/Julie.png';
import img2 from '../assets/Testimonials/Eduardo.png';
import img3 from '../assets/Testimonials/Victoria.png';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

function Testimonials() {
    return(
        <section id='Testimonials'>
            <div className='container'>
                <p className='title'>Testimonials</p>
                <p className='description'>Some quotes from our happy customers</p>
                <div className='review-cont'>
                    <Review info={{img: img1, rating: 4.5, review: '"I love it! No more air fresheners"', author: "Julie"}}/>
                    <Review info={{img: img2, rating: 5, review: '"Recommended for everyone"', author: "Eduardo"}}/>
                    <Review info={{img: img3, rating: 4.5, review: '"Smells great! I love that it lasts a while"', author: "Victoria"}}/>
                </div>
                {/* <Swiper className='review-cont'
                    // modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    <SwiperSlide><Review info={{img: img1, rating: 4.5, review: '"I love it! No more air fresheners"', author: "Julie"}}/></SwiperSlide>
                    <SwiperSlide><Review info={{img: img2, rating: 5, review: '"Recommended for everyone"', author: "Eduardo"}}/></SwiperSlide>
                    <SwiperSlide><Review info={{img: img3, rating: 4.5, review: '"Smells great! I love that it lasts a while"', author: "Victoria"}}/></SwiperSlide>
                </Swiper> */}
            </div>
        </section>
    )
}

export default Testimonials