import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Home, BookOpen, ClipboardCheck, FileText, GraduationCap } from 'lucide-react';

const navItems = [
  { path: '/teacher', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/teacher/classes', label: 'My Classes', icon: <BookOpen className="size-5" /> },
  { path: '/teacher/attendance', label: 'Attendance', icon: <ClipboardCheck className="size-5" /> },
  { path: '/teacher/homework', label: 'Homework', icon: <FileText className="size-5" /> },
  { path: '/teacher/marks', label: 'Marks Entry', icon: <GraduationCap className="size-5" /> },
];

const classes = [
  { id: 1, name: 'Grade 5-A', students: 30, subject: 'Mathematics' },
  { id: 2, name: 'Grade 6-B', students: 28, subject: 'Mathematics' },
];

export default function MyClasses() {
  return (
    <DashboardLayout
      role="Teacher"
      username="teacher"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Classes</h1>
          <p className="text-gray-600 mt-1">View all your assigned classes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classes.map((cls) => (
            <Card key={cls.id}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="size-5 text-[#5a8a6f]" />
                  {cls.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="font-medium">Subject:</span> {cls.subject}</p>
                  <p><span className="font-medium">Students:</span> {cls.students}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
