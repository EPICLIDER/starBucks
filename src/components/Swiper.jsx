import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

export default () => {
    return (
        <>
            <div className='container m-auto flex items-center gap-18 mt-25 mb-13 ps-30'>
                <h2 className="w-[392px] font-extrabold text-[80px] leading-[90px] text-white">New Our <span className="text-[80px] font-extrabold 
                bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] bg-clip-text text-transparent">Products</span></h2>
                <p className="w-[444px] text-xl leading-[163%] text-white">Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!  Starbucks coffee and don't forget about the discount!</p>
            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                spaceBetween={54}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='container px-30!'
            >

                <SwiperSlide className='bg-amber-50 w-[277px]! h-[600px]! bg-transparent border border-[#35C66B] rounded-[29px] flex! flex-col
             items-center gap-2'>
                    <img src="src/assets/coffe-1.png" alt="" />
                    <h3 className='font-medium text-[32px] text-white'>Fast</h3>
                    <p className='text-xl leading-[163%] text-white text-center'>Our cafe will serve you quickly</p>
                    <div className='flex items-center gap-9'>
                        <span className='font-medium text-[32px] text-white'>7,45$</span>
                        <span className='text-xl leading-[163%] text-white'>330 ml</span>
                    </div>
                    <button className="py-3 px-9 rounded-[83px] font-semibold text-xl text-white cursor-pointer 
                bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)]">Buy Product</button>
                </SwiperSlide>

                <SwiperSlide className='bg-amber-50 w-[277px]! h-[600px]! bg-transparent border border-[#35C66B] rounded-[29px] flex! flex-col items-center gap-2'>
                    <img src="src/assets/coffe-2.png" alt="" />
                    <h3 className='font-medium text-[32px] text-white'>Fast</h3>
                    <p className='text-xl leading-[163%] text-white text-center'>Our cafe will serve you quickly</p>
                    <div className='flex items-center gap-9'>
                        <span className='font-medium text-[32px] text-white'>7,45$</span>
                        <span className='text-xl leading-[163%] text-white'>330 ml</span>
                    </div>
                    <button className="py-3 px-9 rounded-[83px] font-semibold text-xl text-white cursor-pointer bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)]">Buy Product</button>
                </SwiperSlide>

                <SwiperSlide className='bg-amber-50 w-[277px]! h-[600px]! bg-transparent border border-[#35C66B] rounded-[29px] flex! flex-col items-center gap-2'>
                    <img src="src/assets/coffe-3.png" alt="" />
                    <h3 className='font-medium text-[32px] text-white'>Cappuccino</h3>
                    <p className='text-xl leading-[163%] text-white text-center'>Our cafe will serve you quickly</p>
                    <div className='flex items-center gap-9'>
                        <span className='font-medium text-[32px] text-white'>7,45$</span>
                        <span className='text-xl leading-[163%] text-white'>330 ml</span>
                    </div>
                    <button className="py-3 px-9 rounded-[83px] font-semibold text-xl text-white cursor-pointer bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)]">Buy Product</button>
                </SwiperSlide>


                <SwiperSlide className='bg-amber-50 w-[277px]! h-[600px]! bg-transparent border border-[#35C66B] rounded-[29px] flex! flex-col items-center gap-2'>
                    <img src="src/assets/coffe-1.png" alt="" />
                    <h3 className='font-medium text-[32px] text-white'>Fast</h3>
                    <p className='text-xl leading-[163%] text-white text-center'>Our cafe will serve you quickly</p>
                    <div className='flex items-center gap-9'>
                        <span className='font-medium text-[32px] text-white'>7,45$</span>
                        <span className='text-xl leading-[163%] text-white'>330 ml</span>
                    </div>
                    <button className="py-3 px-9 rounded-[83px] font-semibold text-xl text-white cursor-pointer bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)]">Buy Product</button>
                </SwiperSlide>

                <SwiperSlide className='bg-amber-50 w-[277px]! h-[600px]! bg-transparent border border-[#35C66B] rounded-[29px] flex! flex-col items-center gap-2'>
                    <img src="src/assets/coffe-2.png" alt="" />
                    <h3 className='font-medium text-[32px] text-white'>Fast</h3>
                    <p className='text-xl leading-[163%] text-white text-center'>Our cafe will serve you quickly</p>
                    <div className='flex items-center gap-9'>
                        <span className='font-medium text-[32px] text-white'>7,45$</span>
                        <span className='text-xl leading-[163%] text-white'>330 ml</span>
                    </div>
                    <button className="py-3 px-9 rounded-[83px] font-semibold text-xl text-white cursor-pointer bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)]">Buy Product</button>
                </SwiperSlide>

                <SwiperSlide className='bg-amber-50 w-[277px]! h-[600px]! bg-transparent border border-[#35C66B] rounded-[29px] flex! flex-col items-center gap-2'>
                    <img src="src/assets/coffe-3.png" alt="" />
                    <h3 className='font-medium text-[32px] text-white'>Cappuccino</h3>
                    <p className='text-xl leading-[163%] text-white text-center'>Our cafe will serve you quickly</p>
                    <div className='flex items-center gap-9'>
                        <span className='font-medium text-[32px] text-white'>7,45$</span>
                        <span className='text-xl leading-[163%] text-white'>330 ml</span>
                    </div>
                    <button className="py-3 px-9 rounded-[83px] font-semibold text-xl text-white cursor-pointer bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)]">Buy Product</button>
                </SwiperSlide>

            </Swiper>
        </>
    );
};
