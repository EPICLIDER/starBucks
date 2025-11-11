export default function Navbar() {
    return (
        <nav className="container m-auto flex items-center gap-[97px] mt-12">
            <a href="/">
                <img src="src/assets/logo.svg" alt="Logo" />
            </a>
            <a href="#" className="text-xl text-white">Home</a>
            <a href="#" className="text-xl text-white">Select</a>
            <a href="#" className="text-xl text-white">Shop</a>
        </nav>
    )
}


