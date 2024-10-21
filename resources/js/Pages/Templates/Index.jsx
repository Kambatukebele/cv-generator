import { Link } from "@inertiajs/react";
const Index = ({ templates }) => {
    return (
        <div>
            <h1>Templates</h1>
            {templates.map((template) => {
                const { id, name, preview_image } = template;
                return (
                    <div key={id} className="my-5 underline">
                        <Link href={route("templates.show", id)}>
                            <span>{name}</span>
                            <span>{preview_image}</span>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Index;
