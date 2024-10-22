import { Link } from "@inertiajs/react";
import React from "react";

const Index = ({ resumes }) => {
    console.log(resumes);

    return (
        <>
            <h1 className="mb-10 text-3xl">List of your resumes</h1>
            {resumes.map((resume) => {
                const { id, title, summary } = resume;
                return (
                    <div key={id} className="border my-10">
                        <div>{title}</div>
                        <div>{summary}</div>
                        <Link
                            href={route("resumes.show", id)}
                            className="bg-orange-700 text-white block w-[12.5rem] text-center my-10 py-2 px-4 rounded-lg"
                        >
                            View you cv
                        </Link>
                    </div>
                );
            })}
        </>
    );
};

export default Index;
