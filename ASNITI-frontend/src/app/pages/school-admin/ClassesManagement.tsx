import { useState } from 'react';
import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Home, Users, GraduationCap, BookOpen, Building2, Plus } from 'lucide-react';

const navItems = [
  { path: '/school-admin', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/school-admin/profile', label: 'School Profile', icon: <Building2 className="size-5" /> },
  { path: '/school-admin/teachers', label: 'Teachers', icon: <Users className="size-5" /> },
  { path: '/school-admin/classes', label: 'Classes', icon: <BookOpen className="size-5" /> },
  { path: '/school-admin/students', label: 'Students', icon: <GraduationCap className="size-5" /> },
];

const mockClasses = [
  { id: 1, name: 'Grade 1-A', students: 30, teacher: 'John Smith' },
  { id: 2, name: 'Grade 2-B', students: 28, teacher: 'Sarah Johnson' },
  { id: 3, name: 'Grade 3-A', students: 32, teacher: 'Mike Jones' },
];

export default function ClassesManagement() {
  return (
    <DashboardLayout
      role="School Admin"
      username="admin"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Classes Management</h1>
            <p className="text-gray-600 mt-1">Manage all classes in your school</p>
          </div>
          <Button className="bg-[#5a8a6f] hover:bg-[#4a7a5f]">
            <Plus className="size-4 mr-2" />
            Create Class
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockClasses.map((cls) => (
            <Card key={cls.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="size-5 text-[#5a8a6f]" />
                  {cls.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Students:</span> {cls.students}</p>
                  <p><span className="font-medium">Teacher:</span> {cls.teacher}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
