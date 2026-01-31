import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Home, BookOpen, ClipboardCheck, FileText, GraduationCap } from 'lucide-react';
import { Link } from 'react-router';

const navItems = [
  { path: '/teacher', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/teacher/classes', label: 'My Classes', icon: <BookOpen className="size-5" /> },
  { path: '/teacher/attendance', label: 'Attendance', icon: <ClipboardCheck className="size-5" /> },
  { path: '/teacher/homework', label: 'Homework', icon: <FileText className="size-5" /> },
  { path: '/teacher/marks', label: 'Marks Entry', icon: <GraduationCap className="size-5" /> },
];

const assignedClasses = [
  { id: 1, name: 'Grade 5-A', students: 30, subject: 'Mathematics' },
  { id: 2, name: 'Grade 6-B', students: 28, subject: 'Mathematics' },
];

export default function TeacherDashboard() {
  return (
    <DashboardLayout
      role="Teacher"
      username="teacher"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teacher Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back, manage your classes</p>
        </div>

        {/* Assigned Classes */}
        <Card>
          <CardHeader>
            <CardTitle>My Assigned Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assignedClasses.map((cls) => (
                <div
                  key={cls.id}
                  className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-lg">{cls.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {cls.subject} • {cls.students} students
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                to="/teacher/attendance"
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <ClipboardCheck className="size-6 text-[#5a8a6f] mb-2" />
                <h3 className="font-semibold">Mark Attendance</h3>
                <p className="text-sm text-gray-500 mt-1">Take class attendance</p>
              </Link>
              <Link
                to="/teacher/homework"
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <FileText className="size-6 text-[#5a8a6f] mb-2" />
                <h3 className="font-semibold">Create Homework</h3>
                <p className="text-sm text-gray-500 mt-1">Assign new homework</p>
              </Link>
              <Link
                to="/teacher/marks"
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors text-left"
              >
                <GraduationCap className="size-6 text-[#5a8a6f] mb-2" />
                <h3 className="font-semibold">Enter Marks</h3>
                <p className="text-sm text-gray-500 mt-1">Record student marks</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
