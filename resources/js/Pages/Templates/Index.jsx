import Guest from "@/Layouts/GuestLayout";
import { Link } from "@inertiajs/react";
import { Button } from "@headlessui/react";
import cv1 from "../../../../public/images/cv1.jpeg";
import cv2 from "../../../../public/images/cv2.jpeg";
import cv3 from "../../../../public/images/cv3.jpeg";
import cv4 from "../../../../public/images/cv4.jpeg";
import cv5 from "../../../../public/images/cv5.jpeg";
import cv6 from "../../../../public/images/cv6.png";
const Index = ({ templates }) => {
    return (
        <Guest>
            <section className="w-full my-5  lg:my-10">
                <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                    <h1 className="text-3xl text-center font-bold mb-3 text-gray-900 lg:text-5xl lg:w-[30rem]">
                        Job-winning resume templates
                    </h1>
                    <p className="text-base text-center font-normal mb-5 text-gray-700 lg:w-[30rem]">
                        Each resume template is designed to follow the exact
                        rules you need to get hired faster. Use our resume
                        templates and get free access to 18 more career tools!
                    </p>
                    <Button
                        className={`text-white bg-blue-800 py-3 px-4 rounded-lg hover:to-orange-600`}
                    >
                        <Link href={route("templates.index")}>
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
                    <div>
                        <img
                            className="mx-auto h-full object-cover object-center"
                            src={cv2}
                            alt="cv1"
                        />
                    </div>
                    <div>
                        <img
                            className="mx-auto h-full object-cover object-center"
                            src={cv3}
                            alt="cv1"
                        />
                    </div>
                    <div>
                        <img
                            className="mx-auto h-full object-cover object-center"
                            src={cv4}
                            alt="cv1"
                        />
                    </div>
                    <div>
                        <img
                            className="mx-auto h-full object-cover object-center"
                            src={cv5}
                            alt="cv1"
                        />
                    </div>
                    <div>
                        <img
                            className="mx-auto h-full object-cover object-center"
                            src={cv6}
                            alt="cv1"
                        />
                    </div>
                </div>
            </section>
            {templates.map((template) => {
                const { id, name, preview_image } = template;
                return (
                    <div key={id} className="my-5 underline">
                        <Link href={route("templates.show", id)}>
                            <span>{name}</span>
                            <span>{preview_image}</span>
                        </Link>
                    </div>
                );
            })}
        </Guest>
    );
};

export default Index;
