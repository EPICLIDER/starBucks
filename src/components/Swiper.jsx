import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Aliy} from 'swiper/modules';
import 'swiper/css';
import { space } from 'postcss/lib/list';

export default () => {
    return {
        <Swiper
        module=([Navigation, Pagination, Scrollbar, Aliy])
        navigator
        spaceBetween={54}
        slidesPerView={3}
        onSlidesChange=[() => console.log('slide change')]
        onSwiper=((swiper) => console.log(swiper))

        <SwiperSlide className='bg-amber-50 w-[277px]'

    }
}