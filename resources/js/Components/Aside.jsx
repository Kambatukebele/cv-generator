import { Link } from "@inertiajs/react";
import React from "react";

const Aside = () => {
    return (
        <div>
            <Link className="block" href={route("resumes.create")}>
                Aside section
            </Link>
            <Link href={route("resumes.index")}>View your invoice</Link>
        </div>
    );
};

export default Aside;
