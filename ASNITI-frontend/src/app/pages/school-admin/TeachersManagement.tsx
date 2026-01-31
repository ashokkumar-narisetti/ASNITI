import { useEffect, useState } from "react";
import { DashboardLayout } from "@/app/components/DashboardLayout";
import { Button } from "@/app/components/ui/button";
import { apiFetch } from "@/app/services/api";
import AddTeacherModal from "./components/AddTeacherModal";

interface Teacher {
  id: string;
  name: string;
  username: string;
  mobile: string;
  status: string;
  className?: string;
}

export default function TeachersManagement() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const loadTeachers = async () => {
    const data = await apiFetch("/api/teachers");
    setTeachers(data);
  };

  useEffect(() => {
    loadTeachers();
  }, []);

  return (
    <DashboardLayout
      role="School Admin"
      username="admin"
      navItems={[
        { path: "/school-admin", label: "Dashboard" },
        { path: "/school-admin/teachers", label: "Teachers" },
        { path: "/school-admin/students", label: "Students" },
        { path: "/school-admin/classes", label: "Classes" },
      ]}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Teachers</h1>
        <Button onClick={() => setModalOpen(true)}>Add Teacher</Button>
      </div>

      <div className="bg-white rounded-lg border">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Username</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Class</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((t) => (
              <tr key={t.id} className="border-b">
                <td className="p-3">{t.name}</td>
                <td className="p-3">{t.username}</td>
                <td className="p-3">{t.mobile}</td>
                <td className="p-3">{t.className || "-"}</td>
                <td className="p-3">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AddTeacherModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={loadTeachers}
      />
    </DashboardLayout>
  );
}
