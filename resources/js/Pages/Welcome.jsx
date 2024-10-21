import { Link, Head } from "@inertiajs/react";
import logo from "../../../public/images/logo.svg";
import { Button } from "@headlessui/react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    // const handleImageError = () => {
    //     document
    //         .getElementById("screenshot-container")
    //         ?.classList.add("!hidden");
    //     document.getElementById("docs-card")?.classList.add("!row-span-1");
    //     document
    //         .getElementById("docs-card-content")
    //         ?.classList.add("!flex-row");
    //     document.getElementById("background")?.classList.add("!hidden");
    // };

    return (
        <>
            <Head title="Welcome" />
            <main>
                <header>
                    <nav>
                        <div>
                            <Link>
                                <img src={logo} alt="" />
                            </Link>
                        </div>
                        <ul>
                            <li>
                                <Link>Resume</Link>
                            </li>
                            <li>
                                <Link>Conver Letter</Link>
                            </li>
                            <li>
                                <Link>Blog</Link>
                            </li>
                            <li>
                                <Link>FAQ</Link>
                            </li>
                            <li>
                                <Link>My Account</Link>
                            </li>
                            <li>
                                <Button>
                                    <Link href={route("templates.index")}>
                                        Build my resume
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                    {/* <nav className="">
                        {auth.user ? (
                            <Link href={route("dashboard")} className="">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route("login")} className="">
                                    Log in
                                </Link>
                                <Link href={route("register")} className="">
                                    Register
                                </Link>
                            </>
                        )}
                    </nav> */}
                </header>
            </main>
        </>
    );
}
