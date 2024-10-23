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
    return (
        <>
            <div className="max-w-[210mm] relative z-20 mx-auto p-6 bg-gray-50 shadow-md flex justify-between items-start">
                <div className="w-[80mm] border">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Personal Detail
                        </h3>
                        <p className="text-base font-normal text-gray-700">
                            Email: <span>{contact_info[0].email}</span>
                        </p>
                        <p className="text-base font-normal text-gray-700">
                            Phone: <span>+420 {contact_info[0].phone}</span>
                        </p>
                        <p className="text-base font-normal text-gray-700">
                            Linkedin: <span>{contact_info[0].linkedin}</span>
                        </p>
                        <p className="text-base font-normal text-gray-700">
                            X: <span>{contact_info[0].twitter}</span>
                        </p>
                    </div>
                    <div className="mb-6 flex flex-col justify-start items-start gap-4">
                        <h3 className="text-xl mb-1 font-semibold text-gray-800">
                            Education
                        </h3>
                        {educations.map((education) => {
                            const {
                                id,
                                degree,
                                institution,
                                location,
                                start_date,
                                end_date,
                            } = education;
                            return (
                                <div
                                    key={id}
                                    className="flex flex-col justify-start items-start gap-1"
                                >
                                    <small className="text-xs px-3 py-1 bg-purple-800 text-white rounded-md">
                                        {start_date} - {end_date}
                                    </small>
                                    <h4 className="text-base text-gray-800 font-semibold">
                                        {degree}
                                    </h4>
                                    <p className="text-sm font-normal text-gray-700">
                                        {institution}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mb-6 flex flex-col justify-start items-start gap-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Language
                        </h3>
                        <table className="border">
                            <thead>
                                <tr>
                                    <td className="w-7 border text-center px-2 py-1 bg-purple-800 text-white">
                                        Language
                                    </td>
                                    <td className="w-7 border text-center px-2 py-1 bg-purple-800 text-white">
                                        Proficiency
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {languages.map((language) => {
                                    const { language: lang, proficiency } =
                                        language;
                                    return (
                                        <tr>
                                            <td className="w-7 border text-center px-2 py-1 bg-gray-100 text-gray-900">
                                                {lang}
                                            </td>
                                            <td className="w-7 border text-center px-2 py-1 bg-gray-100 text-gray-900">
                                                {proficiency}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="mb-6 flex flex-col justify-start items-start gap-4">
                        <h3 className="text-xl mb-1 font-semibold text-gray-800">
                            Project
                        </h3>
                        {projects.map((project) => {
                            const { title, description, url } = project;
                            return (
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h4 className="text-base text-gray-800 font-semibold">
                                        {title}
                                    </h4>
                                    <p className="text-sm font-normal text-gray-700">
                                        {description}
                                    </p>
                                    <a
                                        href={url}
                                        className="text-sm font-normal text-gray-700"
                                    >
                                        {url}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="w-[110mm] border">
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold">
                            {contact_info[0].first_name}
                            <span className="text-purple-800">
                                {" " + contact_info[0].last_name}
                            </span>
                        </h1>
                        <h4 className="text-lg text-gray-800 font-semibold">
                            {title}
                        </h4>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl mb-1 font-semibold text-gray-800">
                            Career Objective
                        </h3>
                        <p className="text-sm font-normal text-gray-700">
                            {summary}
                        </p>
                    </div>
                    <div className="mb-6 flex flex-col justify-start items-start gap-4">
                        <h3 className="text-xl mb-1 font-semibold text-gray-800">
                            Work Experience
                        </h3>
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
                                <div
                                    key={id}
                                    className="flex flex-col justify-start items-start gap-1"
                                >
                                    <small className="text-xs px-3 py-1 bg-purple-800 text-white rounded-md">
                                        {start_date} - {end_date}
                                    </small>
                                    <h4 className="text-base text-gray-800 font-semibold">
                                        {job_title}
                                    </h4>
                                    <p className="text-sm font-normal text-gray-700">
                                        {company}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="mb-6 flex flex-col justify-start items-start gap-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Technical Skills
                        </h3>
                        <table className="border">
                            <thead>
                                <tr>
                                    <td className="w-7 border text-center px-2 py-1 bg-purple-800 text-white">
                                        Development
                                    </td>
                                    <td className="w-72 border text-center px-2 py-1 bg-purple-800 text-white">
                                        Technologies
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {skills.map((skill) => {
                                    const { id, name, level } = skill;
                                    return (
                                        <tr key={id}>
                                            <td className="w-7 border text-center px-2 py-1 bg-gray-100 text-gray-900">
                                                {name}
                                            </td>
                                            <td className="w-7 border text-center px-2 py-1 bg-gray-100 text-gray-900">
                                                {level}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="absolute w-44 h-44 block bg-purple-100 rounded-full -z-10 top-0 -left-28"></div>

                {/* Turn it onto pdf */}
            </div>
            <a
                href={`/resume/${id}/pdf`}
                target="_blank"
                // onClick={downloadPDF}
                className="my-28 block w-[200px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
                Download as PDF
            </a>
        </>
    );
};

export default Show;
