import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import dummyImage from "../../../../public/images/user_placeholder.jpg";
import { Button, Textarea } from "@headlessui/react";

const Create = () => {
    // Initialize the form with one default project block
    const { data, setData, post, processing, errors } = useForm({
        projects: [
            { title: "", description: "", url: "" }, // Default project input fields
        ],
    });
    // Function to add a new project input block
    const addProject = () => {
        setData("projects", [
            ...data.projects,
            { title: "", description: "", url: "" }, // Add a new project block with empty fields
        ]);
    };

    // Function to handle changes in the input fields
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedProjects = [...data.projects];
        updatedProjects[index][name] = value;
        setData("projects", updatedProjects);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("project.store")); // Submit form data to the backend
    };
    return (
        <section className="w-full h-fit">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 my-10 py-5 lg:w-[700px] lg:mx-auto">
                    <h1 className="text-2xl mx-4 text-start font-extrabold text-gray-900 lg:text-center lg:text-5xl">
                        Project
                    </h1>
                </div>
                <button
                    type="button"
                    onClick={addProject}
                    className="bg-blue-800 py-2 px-6 rounded-xl text-white"
                >
                    Add Project
                </button>
                <form onSubmit={handleSubmit} className="">
                    {data.projects.map((project, index) => {
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
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="title"
                                            value={project.title}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            autoComplete="firstname"
                                            isFocused={true}
                                            className="rounded-lg py-3 border-none w-full text-sm font-light"
                                            placeholder="Ex: John"
                                        />
                                        <InputError
                                            message={errors.title}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="first_name"
                                        >
                                            URL
                                        </label>
                                        <input
                                            type="url"
                                            id="firstname"
                                            name="url"
                                            value={project.url}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            autoComplete="firstname"
                                            isFocused={true}
                                            className="rounded-lg py-3 border-none w-full text-sm font-light"
                                            placeholder="Ex: John"
                                        />
                                        <InputError
                                            message={errors.url}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label
                                        className="text-gray-700 text-sm"
                                        htmlFor="surname"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        rows="5"
                                        value={project.description}
                                        onChange={(e) => handleChange(index, e)}
                                        className="rounded-lg py-3 border-none w-full text-sm font-light"
                                    ></textarea>

                                    <InputError
                                        message={errors.level}
                                        className="mt-2"
                                    />
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
