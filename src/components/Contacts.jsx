function Contacts () {
    return (
<div className="container flex m-auto justify-between">
    <div>
        <h2 className="w-[365px] font-extrabold text-[80px] text-white">
            Our 
            <span className="bg-[linear-gradient(265.23deg,_#237249_6.79%,_#35C66B_97.2%)] bg-clip-text text-transparent">
            Contacts
            </span>
        </h2>
        <p className="text-[20px] text-[#D9D9D9] w-[457px]">
            Have time to buy the most harmonious drinks in the new Starbucks coffee and don't forget about the discount!
        </p>
        <div className="flex items-center gap-3 font-medium text-4xl">
            <img src="src/assets/instagram.svg" alt="" />
        <p className="text-white ">@supercoffee</p>
        </div>
        
       <div className="flex items-center gap-3 font-medium text-4xl">
            <img src="src/assets/contact.svg" alt="" />
        <p className="text-white ">+7-999-999-99-99</p>
        </div>
    </div>

    <div>
        <img src="src/assets/contacts-img.png" alt="" />
    </div>
</div>

    )
}
export default Contacts