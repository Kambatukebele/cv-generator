import { Link } from "@inertiajs/react";
import logo from "../../../public/images/logo.svg";
import { Button } from "@headlessui/react";
import hamburger from "../../../public/images/hamburger.svg";
import closeHamburger from "../../../public/images/close.svg";

export default function Guest({ children }) {
    return (
        <>
            <header className="w-full h-fit bg-gray-50 shadow-2xl border">
                <nav className="container mx-auto py-3 px-4 flex justify-between items-center lg:py-4">
                    <div className="block">
                        <Link className="block">
                            <img
                                className="w-20 block lg:w-36"
                                src={logo}
                                alt=""
                            />
                        </Link>
                    </div>
                    <ul className="hidden lg:flex lg:justify-center lg:items-center gap-6">
                        <li className="text-base font-normal text-gray-700">
                            <Link>Resume</Link>
                        </li>
                        <li className="text-base font-normal text-gray-700">
                            <Link>Conver Letter</Link>
                        </li>
                        <li className="text-base font-normal text-gray-700">
                            <Link>Blog</Link>
                        </li>
                        <li className="text-base font-normal text-gray-700">
                            <Link>FAQ</Link>
                        </li>
                        <li className="text-base font-normal text-gray-700">
                            <Link>My Account</Link>
                        </li>
                        <li className="text-base font-normal text-gray-700">
                            <Button
                                className={`text-white bg-blue-800 py-3 px-4 rounded-lg hover:to-orange-600`}
                            >
                                <Link href={route("templates.index")}>
                                    Build my resume
                                </Link>
                            </Button>
                        </li>
                    </ul>
                    <div className="lg:hidden">
                        <span>
                            <img src={hamburger} alt="" />
                        </span>
                        <span className="hidden">
                            <img src={closeHamburger} alt="" />
                        </span>
                    </div>
                </nav>
            </header>
            <div className="">{children}</div>
        </>
    );
}
