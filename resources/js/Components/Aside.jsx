import { Link } from "@inertiajs/react";
import React from "react";

const Aside = () => {
    return (
        <div>
            <Link href={route("resumes.create")}>Create a cv</Link>
        </div>
    );
};

export default Aside;
