import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Home, Users, Calendar, FileText, GraduationCap } from 'lucide-react';
import { Link } from 'react-router';

const navItems = [
  { path: '/parent', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/parent/children', label: 'My Children', icon: <Users className="size-5" /> },
];

const children = [
  { id: 1, name: 'Alice Johnson', class: 'Grade 5-A', attendance: 95, latestMarks: 'Math: 85/100' },
  { id: 2, name: 'Bob Johnson', class: 'Grade 3-B', attendance: 92, latestMarks: 'Science: 78/100' },
];

export default function ParentDashboard() {
  return (
    <DashboardLayout
      role="Parent"
      username="parent"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Parent Dashboard</h1>
          <p className="text-gray-600 mt-1">Monitor your children's progress</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {children.map((child) => (
            <Card key={child.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="size-5 text-[#5a8a6f]" />
                  {child.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Class</p>
                  <p className="font-medium">{child.class}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Attendance</p>
                  <p className="font-medium">{child.attendance}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Latest Marks</p>
                  <p className="font-medium">{child.latestMarks}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Link
                    to={`/parent/attendance/${child.id}`}
                    className="flex-1"
                  >
                    <button className="w-full py-2 px-3 text-sm border rounded hover:bg-gray-50 transition-colors">
                      Attendance
                    </button>
                  </Link>
                  <Link
                    to={`/parent/homework/${child.id}`}
                    className="flex-1"
                  >
                    <button className="w-full py-2 px-3 text-sm border rounded hover:bg-gray-50 transition-colors">
                      Homework
                    </button>
                  </Link>
                  <Link
                    to={`/parent/marks/${child.id}`}
                    className="flex-1"
                  >
                    <button className="w-full py-2 px-3 text-sm border rounded hover:bg-gray-50 transition-colors">
                      Marks
                    </button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
