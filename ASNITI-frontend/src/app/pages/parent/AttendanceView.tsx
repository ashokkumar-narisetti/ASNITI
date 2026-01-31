import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Home, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const navItems = [
  { path: '/parent', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/parent/children', label: 'My Children', icon: <Users className="size-5" /> },
];

const attendanceData = [
  { date: '2024-03-18', status: 'Present' },
  { date: '2024-03-17', status: 'Present' },
  { date: '2024-03-16', status: 'Absent' },
  { date: '2024-03-15', status: 'Present' },
  { date: '2024-03-14', status: 'Present' },
];

export default function AttendanceView() {
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
          <h1 className="text-3xl font-bold text-gray-900">Attendance - Alice Johnson</h1>
          <p className="text-gray-600 mt-1">View attendance records</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold text-green-600">95%</p>
                <p className="text-sm text-gray-500 mt-1">Overall Attendance</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold">19</p>
                <p className="text-sm text-gray-500 mt-1">Present Days</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold">1</p>
                <p className="text-sm text-gray-500 mt-1">Absent Days</p>
              </div>
              <div className="text-center p-4 border rounded-lg">
                <p className="text-2xl font-bold">20</p>
                <p className="text-sm text-gray-500 mt-1">Total Days</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold mb-3">Recent Attendance</h3>
              {attendanceData.map((record, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <span className="font-medium">{record.date}</span>
                  <Badge
                    className={
                      record.status === 'Present'
                        ? 'bg-green-100 text-green-700 hover:bg-green-100'
                        : 'bg-red-100 text-red-700 hover:bg-red-100'
                    }
                  >
                    {record.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
