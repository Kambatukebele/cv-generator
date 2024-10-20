import React from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import dummyImage from "../../../../public/images/user_placeholder.jpg";

const Create = () => {
    return (
        <main className="">
            {/* Heading */}
            <section className="w-full h-fit">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-3 my-10 py-5 lg:w-[700px] lg:mx-auto">
                        <h1 className="text-2xl mx-4 text-start font-extrabold text-gray-900 lg:text-center lg:text-5xl">
                            Fill out all your informations and choose your
                            template at the end
                        </h1>
                        <p className="text-base font-light text-gray-600 text-wrap text-start mx-4 lg:text-center">
                            We suggest including an email and phone number.
                        </p>
                    </div>
                    <div className="">
                        <div className="p-4 bg-gray-100 shadow-xl min-w-[190px] rounded-3xl mx-4 lg:w-[768px] lg:mx-auto">
                            <div className="flex flex-col gap-3 mb-10">
                                <h1 className="text-xl font-extrabold text-gray-900 text-start lg:text-3xl">
                                    What's the best way for employers to contact
                                    you?
                                </h1>
                                <p className="text-base font-light text-gray-600 text-wrap text-start">
                                    We suggest including an email and phone
                                    number.
                                </p>
                            </div>
                            {/* Image */}
                            <div class="sm:w-1/2">
                                <label
                                    className="text-gray-700 text-sm"
                                    htmlFor="phone"
                                >
                                    <img
                                        className="w-20 h-20 rounded-full mb-5"
                                        src={dummyImage}
                                        alt="user dummy image"
                                    />
                                    <input
                                        type="file"
                                        id="phone"
                                        name="phone"
                                        value=""
                                        autoComplete="phone"
                                        isFocused={true}
                                        required
                                        className="hidden rounded-lg py-3 w-full border-none text-sm font-light"
                                    />
                                    <span className="my-5 hover:underline">
                                        Upload image
                                    </span>
                                </label>

                                <InputError message="" className="mt-2" />
                            </div>
                            <br />
                            <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="name"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstname"
                                        name="firstname"
                                        value=""
                                        autoComplete="firstname"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: John"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="surname"
                                    >
                                        SurName
                                    </label>
                                    <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        value=""
                                        autoComplete="surname"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 w-full border-none text-sm font-light"
                                        placeholder="Ex: Doe"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="name"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value=""
                                        autoComplete="email"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: example@example.com"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="phone"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        value=""
                                        autoComplete="phone"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 w-full border-none text-sm font-light"
                                        placeholder="Ex: +420 999 888 777"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="name"
                                    >
                                        City
                                    </label>
                                    <input
                                        type="city"
                                        id="city"
                                        name="city"
                                        value=""
                                        autoComplete="city"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 pl-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: Kinshasa"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center sm:gap-2 md:gap-4">
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="code_postal"
                                        >
                                            Code postal
                                        </label>
                                        <input
                                            type="number"
                                            id="code_postal"
                                            name="code_postal"
                                            value=""
                                            autoComplete="code postal"
                                            isFocused={true}
                                            required
                                            className="rounded-lg py-3 w-full border-none text-sm font-light"
                                            placeholder="Code postal"
                                        />
                                        <InputError
                                            message=""
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="country"
                                        >
                                            Country
                                        </label>
                                        <input
                                            type="number"
                                            id="country"
                                            name="country"
                                            value=""
                                            autoComplete="country"
                                            isFocused={true}
                                            required
                                            className="rounded-lg py-3 w-full border-none text-sm font-light"
                                            placeholder="Congo"
                                        />
                                        <InputError
                                            message=""
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Work history */}
            <section className="w-full h-fit">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-3 my-10 py-5 lg:w-[700px] lg:mx-auto">
                        <h1 className="text-2xl mx-4 text-start font-extrabold text-gray-900 lg:text-center lg:text-5xl">
                            Now, let’s fill out your work history
                        </h1>
                        <p className="text-base font-light text-gray-600 text-wrap text-start mx-4 lg:text-center">
                            Here’s what you need to know: Employers scan your
                            resume to see if you're a match. We'll suggest
                            bullet points that make a great impression.
                        </p>
                    </div>
                    <div className="">
                        <div className="p-4 bg-gray-100 shadow-xl min-w-[190px] rounded-3xl mx-4 lg:w-[768px] lg:mx-auto">
                            <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="Job title"
                                    >
                                        Job title
                                    </label>
                                    <input
                                        type="text"
                                        id="job_title"
                                        name="job_title"
                                        value=""
                                        autoComplete="Job title"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: Web developer"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="employer"
                                    >
                                        Employer
                                    </label>
                                    <input
                                        type="text"
                                        id="employer"
                                        name="employer"
                                        value=""
                                        autoComplete="employer"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 w-full border-none text-sm font-light"
                                        placeholder="Ex: Google"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-start gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="Location"
                                    >
                                        location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value=""
                                        autoComplete="location"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: example@example.com"
                                    />
                                    <div className="mt-2">
                                        <input
                                            type="checkbox"
                                            name="location"
                                            id="location"
                                        />
                                        <span className="ml-2">Remote</span>
                                    </div>
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="start date"
                                    >
                                        start date
                                    </label>
                                    <input
                                        type="date"
                                        id="start_date"
                                        name="start date"
                                        value=""
                                        autoComplete="start date"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 pl-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: Kinshasa"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="start date"
                                    >
                                        start date
                                    </label>
                                    <input
                                        type="date"
                                        id="start_date"
                                        name="start date"
                                        value=""
                                        autoComplete="start date"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 pl-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: Kinshasa"
                                    />
                                    <div className="mt-2">
                                        <input type="checkbox" name="current" />
                                        <span className="ml-2">
                                            I work Currently here
                                        </span>
                                    </div>
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                        </div>
                        <div className="min-w-[190px] my-10 rounded-3xl mx-4 lg:w-[768px] lg:mx-auto">
                            <button className="py-2 px-3 border">
                                <a href="#">Add another one</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* education */}
            <section className="w-full h-fit">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-3 my-10 py-5 lg:w-[700px] lg:mx-auto">
                        <h1 className="text-2xl mx-4 text-start font-extrabold text-gray-900 lg:text-center lg:text-5xl">
                            Great, let’s work on your education
                        </h1>
                        <p className="text-base font-light text-gray-600 text-wrap text-start mx-4 lg:text-center">
                            Here’s what you need to know: Employers quickly scan
                            the education section. We’ll take care of the
                            formatting so it’s easy to find.
                        </p>
                    </div>
                    <div className="">
                        <div className="p-4 bg-gray-100 shadow-xl min-w-[190px] rounded-3xl mx-4 lg:w-[768px] lg:mx-auto">
                            <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="School Name *"
                                    >
                                        School Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="school_name"
                                        name="school_name"
                                        value=""
                                        autoComplete="school_name"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: Havard"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="school_location"
                                    >
                                        School location
                                    </label>
                                    <input
                                        type="text"
                                        id="school_location"
                                        name="school_location"
                                        value=""
                                        autoComplete="school_location"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 w-full border-none text-sm font-light"
                                        placeholder="Ex: Prague"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="degree"
                                    >
                                        degree
                                    </label>
                                    <input
                                        type="text"
                                        id="degree"
                                        name="degree"
                                        value=""
                                        autoComplete="degree"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: example@example.com"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="field of study"
                                    >
                                        Field of study
                                    </label>
                                    <input
                                        type="text"
                                        id="field_of_study"
                                        name="field_of_study"
                                        value=""
                                        autoComplete="field of study"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 w-full border-none text-sm font-light"
                                        placeholder="Ex: +420 999 888 777"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                <div className="sm:w-1/2">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="name"
                                    >
                                        Graduation date
                                    </label>
                                    <input
                                        type="date"
                                        id="graduation_date"
                                        name="graduation_date"
                                        value=""
                                        autoComplete="graduation date"
                                        isFocused={true}
                                        required
                                        className="rounded-lg py-3 pl-3 border-none w-full text-sm font-light"
                                        placeholder="Ex: Kinshasa"
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="sm:w-1/2 sm:flex sm:justify-center sm:items-center sm:gap-2 md:gap-4">
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="code_postal"
                                        >
                                            Code postal
                                        </label>
                                        <input
                                            type="number"
                                            id="code_postal"
                                            name="code_postal"
                                            value=""
                                            autoComplete="code postal"
                                            isFocused={true}
                                            required
                                            className="rounded-lg py-3 w-full border-none text-sm font-light"
                                            placeholder="Code postal"
                                        />
                                        <InputError
                                            message=""
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="country"
                                        >
                                            Country
                                        </label>
                                        <input
                                            type="number"
                                            id="country"
                                            name="country"
                                            value=""
                                            autoComplete="country"
                                            isFocused={true}
                                            required
                                            className="rounded-lg py-3 w-full border-none text-sm font-light"
                                            placeholder="Congo"
                                        />
                                        <InputError
                                            message=""
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Create;
