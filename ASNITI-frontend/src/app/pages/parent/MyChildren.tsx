import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Home, Users } from 'lucide-react';

const navItems = [
  { path: '/parent', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/parent/children', label: 'My Children', icon: <Users className="size-5" /> },
];

const children = [
  { id: 1, name: 'Alice Johnson', class: 'Grade 5-A', rollNo: '001', teacher: 'Mrs. Smith' },
  { id: 2, name: 'Bob Johnson', class: 'Grade 3-B', rollNo: '015', teacher: 'Mr. Brown' },
];

export default function MyChildren() {
  return (
    <DashboardLayout
      role="Parent"
      username="parent"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Children</h1>
          <p className="text-gray-600 mt-1">View all your children's information</p>
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
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Class</p>
                  <p className="font-medium">{child.class}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Roll Number</p>
                  <p className="font-medium">{child.rollNo}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Class Teacher</p>
                  <p className="font-medium">{child.teacher}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
