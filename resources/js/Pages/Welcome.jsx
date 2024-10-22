import { Link, Head } from "@inertiajs/react";
import { Button } from "@headlessui/react";
import imageHero from "../../../public/images/imageHero.jpg";
import Guest from "@/Layouts/GuestLayout";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="ResumeKamba" />
            <Guest>
                {/* Hero */}
                <section className="w-full h-screen bg-gray-50 lg:relative ">
                    <div className="container mx-auto px-4 py-3 flex flex-col lg:flex-row lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-3xl font-bold mb-3 text-gray-900 lg:text-5xl lg:w-[30rem]">
                                Only 2% of resumes make it past the first round.
                                Be in the top 2%
                            </h1>
                            <p className="text-base font-normal mb-5 text-gray-700 lg:w-[30rem]">
                                Use professional field-tested resume templates
                                that follow the exact ‘resume rules’ employers
                                look for. Easy to use and done within minutes -
                                try now for free!
                            </p>
                            <Button
                                className={`text-white bg-blue-800 py-3 px-4 rounded-lg hover:to-orange-600`}
                            >
                                <Link href={route("templates.index")}>
                                    Build my resume
                                </Link>
                            </Button>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img
                                className="rounded-lg"
                                src={imageHero}
                                alt=""
                            />
                        </div>
                    </div>
                </section>
            </Guest>
        </>
    );
}
