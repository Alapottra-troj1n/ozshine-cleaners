import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { Prata, Poppins } from "next/font/google";

const prata = Prata({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-prata",
});

const poppins = Poppins({
    weight: ["400", "600"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

const Header = () => {
    return (
        <header className="flex justify-between max-w-7xl mx-auto p-5 items-center gap-5 md:gap-0">
            <Link href="/" className={`${prata.className} text-xl md:text-[26px] font-normal text-black`}>
                OzShine Cleaners
            </Link>

            <div className="flex items-center gap-2">
                <FaPhone className="text-[#0E4E38] text-md md:text-lg"  />
                <div className="flex flex-col leading-tight items-center">
                    <span className={`${poppins.className} text-sm font-normal`}>
                        Quick Contact
                    </span>
                    <a href="tel:+61452679582" className={`${poppins.className} text-lg font-semibold text-[#0E4E38]`}>
                        +61452679582
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
