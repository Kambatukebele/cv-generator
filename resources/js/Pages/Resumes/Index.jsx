import { Link } from "@inertiajs/react";
import React from "react";

const Index = () => {
    return (
        <>
            <h1 className="mb-10">List of your resumes</h1>
            <Link
                href="/resumes/create"
                className="bg-orange-700 text-white py-2 px-4 rounded-lg"
            >
                Create new resume
            </Link>
        </>
    );
};

export default Index;
