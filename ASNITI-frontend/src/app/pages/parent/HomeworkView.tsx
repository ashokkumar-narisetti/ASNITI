import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Home, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const navItems = [
  { path: '/parent', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/parent/children', label: 'My Children', icon: <Users className="size-5" /> },
];

const homework = [
  { id: 1, title: 'Chapter 5 Exercises', subject: 'Mathematics', dueDate: '2024-03-20', status: 'Pending' },
  { id: 2, title: 'Science Project', subject: 'Science', dueDate: '2024-03-25', status: 'Pending' },
  { id: 3, title: 'Essay Writing', subject: 'English', dueDate: '2024-03-15', status: 'Completed' },
];

export default function HomeworkView() {
  return (
    <DashboardLayout
      role="Parent"
      username="parent"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <Link
            to="/parent"
            className="inline-flex items-center text-sm text-[#5a8a6f] hover:underline mb-4"
          >
            <ArrowLeft className="size-4 mr-1" />
            Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Homework - Alice Johnson</h1>
          <p className="text-gray-600 mt-1">View homework assignments</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Homework List</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {homework.map((hw) => (
                <div
                  key={hw.id}
                  className="p-4 border rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{hw.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {hw.subject} • Due: {hw.dueDate}
                      </p>
                    </div>
                    <Badge
                      className={
                        hw.status === 'Completed'
                          ? 'bg-green-100 text-green-700 hover:bg-green-100'
                          : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                      }
                    >
                      {hw.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
