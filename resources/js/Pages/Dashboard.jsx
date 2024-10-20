// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Aside from "@/Components/Aside";
import ResumesSection from "@/Components/ResumesSection";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AdminLayout>
            <Aside />
            <div>
                <ResumesSection />
            </div>
        </AdminLayout>
    );
}
