import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Home, Users, GraduationCap, BookOpen, Building2 } from 'lucide-react';

const navItems = [
  { path: '/school-admin', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/school-admin/profile', label: 'School Profile', icon: <Building2 className="size-5" /> },
  { path: '/school-admin/teachers', label: 'Teachers', icon: <Users className="size-5" /> },
  { path: '/school-admin/classes', label: 'Classes', icon: <BookOpen className="size-5" /> },
  { path: '/school-admin/students', label: 'Students', icon: <GraduationCap className="size-5" /> },
];

export default function SchoolProfile() {
  return (
    <DashboardLayout
      role="School Admin"
      username="admin"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">School Profile</h1>
          <p className="text-gray-600 mt-1">View your school information</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>School Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-gray-500">School Name</label>
                <p className="text-lg font-semibold mt-1">Green Valley High School</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Status</label>
                <div className="mt-1">
                  <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                    ACTIVE
                  </Badge>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-gray-500">Address</label>
                <p className="text-lg mt-1">123 Education Lane, Learning City, LC 12345</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Created Date</label>
                <p className="text-lg mt-1">January 15, 2024</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Total Users</label>
                <p className="text-lg mt-1">245</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
