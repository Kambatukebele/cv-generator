import { Link } from "@inertiajs/react";
import React from "react";

const Show = ({ resume }) => {
    const {
        id,
        educations,
        experiences,
        projects,
        languages,
        skills,
        summary,
        title,
        contact_info,
    } = resume;
    // const downloadPDF = () => {
    //     Inertia.visit(``, {
    //         console.log("yes")
    //         // method: "get",
    //         // preserveScroll: true,
    //     });
    // };

    return (
        <div className="max-w-[210mm] mx-auto p-6 bg-white shadow-md">
            {/* Header Section */}
            <header className="border-b pb-4 mb-6">
                <h1 className="text-3xl font-bold uppercase">
                    {contact_info[0].first_name +
                        " " +
                        contact_info[0].last_name}
                </h1>
                <p className="text-gray-600">{title}</p>
                <p className="text-gray-600">{contact_info[0].email}</p>
                <p className="text-gray-600">+420 {contact_info[0].phone}</p>
                <p className="text-gray-600">{contact_info[0].linkedin}</p>
                <p className="text-gray-600">{contact_info[0].twitter}</p>
            </header>

            {/* Summary Section */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    Professional Summary
                </h2>
                <p className="text-gray-700">{summary}</p>
            </section>

            {/* Experience Section */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Experience</h2>
                <div className="space-y-4">
                    {experiences.map((experience) => {
                        const {
                            id,
                            job_title,
                            company,
                            description,
                            start_date,
                            end_date,
                            location,
                        } = experience;
                        return (
                            <div key={id} className="border-b pb-4">
                                <h3 className="text-lg font-bold">
                                    {job_title + " - " + company}
                                </h3>
                                <p className="text-gray-600">
                                    {start_date +
                                        "-" +
                                        end_date +
                                        "-" +
                                        location}
                                </p>
                                <p>{description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Education Section */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                <div className="space-y-4">
                    {educations.map((education) => {
                        const {
                            degree,
                            institution,
                            location,
                            start_date,
                            end_date,
                        } = education;
                        return (
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-bold">
                                    {degree + "-" + institution}
                                </h3>
                                <p className="text-gray-600">
                                    {start_date +
                                        "-" +
                                        " " +
                                        end_date +
                                        " " +
                                        "-" +
                                        location}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <ul className="list-disc list-inside">
                    {skills.map((skill) => {
                        const { id, name, level } = skill;
                        return (
                            <li>
                                {name} ({level})
                            </li>
                        );
                    })}
                </ul>
            </section>

            {/* Projects Section */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Projects</h2>
                <div className="space-y-4">
                    {projects.map((project) => {
                        const { title, description, url } = project;
                        return (
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-bold">{title}</h3>
                                <p className="text-gray-600">{description}</p>
                                <a href={url} className="text-blue-500">
                                    view project
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Languages Section */}
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Languages</h2>
                <ul className="list-disc list-inside">
                    {/* Map through language data */}
                    {languages.map((language) => {
                        const { language: lang, proficiency } = language;
                        return (
                            <li>
                                {lang} ({proficiency})
                            </li>
                        );
                    })}
                </ul>
            </section>
            {/* Turn it onto pdf */}
            <a
                href={`/resume/${id}/pdf`}
                target="_blank"
                // onClick={downloadPDF}
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
                Download as PDF
            </a>
        </div>
    );
};

export default Show;
