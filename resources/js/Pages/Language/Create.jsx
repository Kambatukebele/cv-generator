import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import dummyImage from "../../../../public/images/user_placeholder.jpg";
import { Button, Textarea } from "@headlessui/react";

const Create = () => {
    // Initialize the form with one default language block
    const { data, setData, post, processing, errors } = useForm({
        languages: [
            { language: "", proficiency: "" }, // Default language input fields
        ],
    });

    // Function to add a new language input block
    const addLanguage = () => {
        setData("languages", [
            ...data.languages,
            { language: "", proficiency: "" }, // Add a new language block with empty fields
        ]);
    };

    // Function to handle changes in the input fields
    const handleChange = (index, event) => {
        const { name, value } = event.target;
        const updatedLanguages = [...data.languages];
        updatedLanguages[index][name] = value;
        setData("languages", updatedLanguages);
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        post(route("language.store")); // Submit form data to the backend
    };

    return (
        <section className="w-full h-fit">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 my-10 py-5 lg:w-[700px] lg:mx-auto">
                    <h1 className="text-2xl mx-4 text-start font-extrabold text-gray-900 lg:text-center lg:text-5xl">
                        Language
                    </h1>
                </div>
                <button
                    type="button"
                    onClick={addLanguage}
                    className="bg-blue-800 py-2 px-6 rounded-xl text-white"
                >
                    Add Language
                </button>
                <form onSubmit={handleSubmit} className="">
                    {data.languages.map((language, index) => {
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
                                            Language Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="language"
                                            value={language.language}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
                                            className="rounded-lg py-3 border-none w-full text-sm font-light"
                                        />
                                        <InputError
                                            message={errors.language}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="sm:w-1/2">
                                        <label
                                            className="text-gray-700 text-sm"
                                            htmlFor="first_name"
                                        >
                                            Proficiency Level
                                        </label>
                                        <input
                                            type="text"
                                            id="firstname"
                                            name="proficiency"
                                            value={language.proficiency}
                                            onChange={(e) =>
                                                handleChange(index, e)
                                            }
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
                            </div>
                        );
                    })}
                    <Button
                        type="submit"
                        className={`w-[200px] border py-2 rounded-xl bg-blue-800 text-white my-5`}
                    >
                        Save and Register
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default Create;
