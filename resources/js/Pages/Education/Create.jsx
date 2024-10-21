import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import dummyImage from "../../../../public/images/user_placeholder.jpg";
import { Button, Textarea } from "@headlessui/react";
import { useState } from "react";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        educations: [
            {
                degree: "",
                institution: "",
                start_date: "",
                end_date: "",
                location: "",
            },
        ],
    });

    // Function to add a new education input block
    const addEducation = () => {
        setData("educations", [
            ...data.educations,
            {
                degree: "",
                institution: "",
                start_date: "",
                end_date: "",
                location: "",
            },
        ]);
    };

    // Function to handle changes in the input fields
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedEducations = [...data.educations];
        updatedEducations[index][name] = value;
        setData("educations", updatedEducations);
    };

    const handleContactInfoForm = (e) => {
        e.preventDefault();
        post(route("education.store"));
    };
    return (
        <section className="w-full h-fit">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 my-10 py-5 lg:w-[700px] lg:mx-auto">
                    <h1 className="text-2xl mx-4 text-start font-extrabold text-gray-900 lg:text-center lg:text-5xl">
                        Education
                    </h1>
                </div>
                <button
                    type="button"
                    onClick={addEducation}
                    className="bg-blue-800 py-2 px-6 rounded-xl text-white"
                >
                    Add Education
                </button>
                <form onSubmit={handleContactInfoForm} className="">
                    {data.educations.map((education, index) => {
                        return (
                            <div
                                key={index}
                                className="p-4 bg-gray-100 shadow-xl mt-5 min-w-[190px] rounded-3xl mx-4 lg:w-[768px] lg:mx-auto"
                            >
                                <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="first_name"
                                        >
                                            Degree
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="degree"
                                            value={education.degree}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            autoComplete="firstname"
                                            isFocused={true}
                                            className="rounded-lg py-3 border-none w-full text-sm font-light"
                                            placeholder="Ex: John"
                                        />
                                        <InputError
                                            message={errors.degree}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="surname"
                                        >
                                            Institution
                                        </label>
                                        <input
                                            type="text"
                                            id="surname"
                                            name="institution"
                                            value={education.institution}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            autoComplete="surname"
                                            isFocused={true}
                                            className="rounded-lg py-3 w-full border-none text-sm font-light"
                                            placeholder="Ex: Doe"
                                        />
                                        <InputError
                                            message={errors.institution}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                {/* <div className="w-full">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="name"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        rows="5"
                                        value={education.description}
                                        className="rounded-lg py-3 w-full border-none text-sm font-light"
                                        onChange={(e) => handleChange(index, e)}
                                    ></textarea>

                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div> */}
                                <div className="flex flex-col justify-center gap-1 mb-2 sm:flex-row sm:gap-2 md:gap-4">
                                    <div className="w-full">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="phone"
                                        >
                                            Start Date
                                        </label>
                                        <input
                                            type="date"
                                            id="phone"
                                            name="start_date"
                                            value={education.start_date}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            autoComplete="start_date"
                                            isFocused={true}
                                            className="rounded-lg py-3 w-full border-none text-sm font-light"
                                            placeholder="Ex: +420 999 888 777"
                                        />
                                        <InputError
                                            message={errors.start_date}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="name"
                                        >
                                            End Date
                                        </label>
                                        <input
                                            type="date"
                                            id="city"
                                            name="end_date"
                                            value={education.end_date}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            autoComplete="end_date"
                                            isFocused={true}
                                            className="rounded-lg py-3 pl-3 border-none w-full text-sm font-light"
                                            placeholder="Ex: Kinshasa"
                                        />
                                        <InputError
                                            message={errors.end_date}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="w-full ">
                                        <div className="sm:w-1/2">
                                            <label
                                                className="text-gray-700 text-sm"
                                                htmlFor="code_postal"
                                            >
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                id="code_postal"
                                                name="location"
                                                value={education.location}
                                                onChange={(e) =>
                                                    handleChange(index, e)
                                                }
                                                autoComplete="location"
                                                isFocused={true}
                                                className="rounded-lg py-3 w-full border-none text-sm font-light"
                                                placeholder="Code postal"
                                            />
                                            <InputError
                                                message={errors.location}
                                                className="mt-2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <Button
                        type="submit"
                        className={`w-[200px] border py-2 rounded-xl bg-blue-800 text-white my-5`}
                    >
                        Save and continue
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Create;
