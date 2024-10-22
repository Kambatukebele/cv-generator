import Guest from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import { Button } from "@headlessui/react";
import cv1 from "../../../../public/images/cv1.jpeg";

const Show = ({ template }) => {
    return (
        <Guest>
            <section className="w-full my-5  lg:my-10">
                <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-center font-bold mb-3 text-gray-900 lg:text-5xl lg:w-[30rem]">
                        Good job
                    </h1>
                    <p className="text-base text-center font-normal mb-5 text-gray-700 lg:w-[30rem]">
                        Let's build something great!
                    </p>
                    <Button
                        className={`text-white bg-blue-800 py-3 px-4 rounded-lg hover:to-orange-600`}
                    >
                        <Link href={route("resumes.create")}>
                            Build my resume
                        </Link>
                    </Button>
                </div>
            </section>
            <section className="w-full lg:my-10">
                <div className="container mx-auto px-4 grid gap-4 md:grid-cols-3">
                    <div className="">
                        <img
                            className="mx-auto h-full object-cover object-center"
                            src={cv1}
                            alt="cv1"
                        />
                    </div>
                </div>
            </section>
            <div>
                <h4>{template.name}</h4>
                <h5 className="mb-5">{template.preview_image}</h5>
                <Link
                    href={route("resumes.create")}
                    className={`border bg-blue-800 text-white py-2 px-4 rounded-xl mt-5 w-[200px]`}
                >
                    Continue
                </Link>
            </div>
        </Guest>
    );
};

export default Show;
