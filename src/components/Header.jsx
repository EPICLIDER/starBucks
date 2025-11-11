export default function Header() {
    return (
        <header>
            <div className="container m-auto flex items-end justify-around">
                <div className="flex flex-col gap-13">
                    <h1 className="font-extrabold text-[80px] leading-[90px] text-white">New Cafe <br /> by
                        <span className="text-[80px] font-extrabold bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] bg-clip-text text-transparent">StarBucks</span></h1>

                    <p className="text-xl leading-[163%] text-white w-xl">Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!</p>

                    <div className="flex gap-4">
                        <button className="py-5 px-20 rounded-[83px] font-semibold text-2xl text-white cursor-pointer bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)]">Select a coffee </button>
                        <button className="py-5 px-14 rounded-[83px] border border-[#DADADA] text-2xl text-white cursor-pointer">More</button>
                    </div>

                    <div className="flex gap-16">
                        <span>
                            <h3 className="text-6xl text-white">9k<span className="text-[#2ea85f]">+</span></h3>
                            <p className="text-xl text-white">Premium <br /> Users</p>
                        </span>
                        <span>
                            <h3 className="text-6xl text-white">2k<span className="text-[#2ea85f]">+</span></h3>
                            <p className="text-xl text-white">Happy <br /> Customer</p>
                        </span>
                        <span>
                            <h3 className="text-6xl text-white">28<span className="text-[#2ea85f]">+</span></h3>
                            <p className="text-xl text-white">Awards <br /> Winning</p>
                        </span>
                    </div>
                </div>

                <img src="src/assets/hero-img.png" alt="" />
            </div>

            <div className="container m-auto w-5xl flex items-center justify-between rounded-[46px] bg-white py-10 px-20 mt-28 mb-25 relative">
                <img className="absolute -top-20 -left-20" src="src/assets/badge.png" alt="" />
                
                <div className="w-[190px] text-center">
                    <img src="src/assets/heart-img.png" alt="" />
                    <h3 className="font-medium text-[32px]">Tasty</h3>
                    <p className="text-xl">We have the most delicious coffee</p>
                </div>

                <div className="w-[216px] text-center">
                    <img src="src/assets/rocket-img.png" alt="" />
                    <h3 className="font-medium text-[32px]">Fast</h3>
                    <p className="text-xl">Our cafe will serve you quickly</p>
                </div>

                <div className="w-[211px] text-center">
                    <img src="src/assets/money-img.png" alt="" />
                    <h3 className="font-medium text-[32px]">Available</h3>
                    <p className="text-xl">Cafe will serveat the most pleasant prices</p>
                </div>
            </div>
        </header>
    )
}
