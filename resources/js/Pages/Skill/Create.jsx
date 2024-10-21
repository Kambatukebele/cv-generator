import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import dummyImage from "../../../../public/images/user_placeholder.jpg";
import { Button, Textarea } from "@headlessui/react";

const Create = () => {
    const { data, setData, post, processing, errors } = useForm({
        skills: [
            { name: "", level: "" }, // Default skill input fields
        ],
    });
    // Function to add a new skill input block
    const addSkill = () => {
        setData("skills", [
            ...data.skills,
            { name: "", level: "" }, // Add a new skill block with empty fields
        ]);
    };

    // Function to handle changes in the input fields
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedSkills = [...data.skills];
        updatedSkills[index][name] = value;
        setData("skills", updatedSkills);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("skill.store")); // Submit form data to the backend
    };
    return (
        <section className="w-full h-fit">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 my-10 py-5 lg:w-[700px] lg:mx-auto">
                    <h1 className="text-2xl mx-4 text-start font-extrabold text-gray-900 lg:text-center lg:text-5xl">
                        Skills
                    </h1>
                </div>
                <button
                    type="button"
                    onClick={addSkill}
                    className="bg-blue-800 py-2 px-6 rounded-xl text-white"
                >
                    Add Skill
                </button>
                <form onSubmit={handleSubmit} className="">
                    {data.skills.map((skill, index) => {
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
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="name"
                                            value={skill.name}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            autoComplete="firstname"
                                            isFocused={true}
                                            className="rounded-lg py-3 border-none w-full text-sm font-light"
                                            placeholder="Ex: John"
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="surname"
                                        >
                                            Level
                                        </label>
                                        <input
                                            type="text"
                                            id="surname"
                                            name="level"
                                            value={skill.level}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            autoComplete="surname"
                                            isFocused={true}
                                            className="rounded-lg py-3 w-full border-none text-sm font-light"
                                            placeholder="Ex: Doe"
                                        />
                                        <InputError
                                            message={errors.level}
                                            className="mt-2"
                                        />
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
