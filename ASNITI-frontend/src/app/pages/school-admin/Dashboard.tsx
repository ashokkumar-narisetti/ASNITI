import { DashboardLayout } from "@/app/components/DashboardLayout";
import { School, Users, BookOpen, GraduationCap } from "lucide-react";

/**
 * IMPORTANT:
 * navItems MUST be defined and MUST be an array
 * Otherwise DashboardLayout will crash on navItems.map(...)
 */
const navItems = [
  {
    path: "/school-admin",
    label: "Dashboard",
    icon: <School className="size-5" />,
  },
  {
    path: "/school-admin/teachers",
    label: "Teachers",
    icon: <Users className="size-5" />,
  },
  {
    path: "/school-admin/classes",
    label: "Classes",
    icon: <BookOpen className="size-5" />,
  },
  {
    path: "/school-admin/students",
    label: "Students",
    icon: <GraduationCap className="size-5" />,
  },
];

export default function SchoolAdminDashboard() {
  return (
    <DashboardLayout
      role="School Admin"
      username="schooladmin"
      navItems={navItems}
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">
          School Admin Dashboard
        </h1>

        <p className="text-gray-600">
          Manage teachers, classes, students, and school information.
        </p>

        {/* You can add cards / stats here later */}
      </div>
    </DashboardLayout>
  );
}
