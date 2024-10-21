import { Link } from "@inertiajs/react";
import React from "react";

const Show = ({ template }) => {
    return (
        <div>
            <h4>{template.name}</h4>
            <h5 className="mb-5">{template.preview_image}</h5>
            <Link
                href={route("resumes.create")}
                className={`border bg-blue-800 text-white py-2 px-4 rounded-xl mt-5 w-[200px]`}
            >
                Continue
            </Link>
        </div>
    );
};

export default Show;
