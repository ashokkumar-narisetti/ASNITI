import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Badge } from '@/app/components/ui/badge';
import { Home, BookOpen, ClipboardCheck, FileText, GraduationCap } from 'lucide-react';

const navItems = [
  { path: '/teacher', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/teacher/classes', label: 'My Classes', icon: <BookOpen className="size-5" /> },
  { path: '/teacher/attendance', label: 'Attendance', icon: <ClipboardCheck className="size-5" /> },
  { path: '/teacher/homework', label: 'Homework', icon: <FileText className="size-5" /> },
  { path: '/teacher/marks', label: 'Marks Entry', icon: <GraduationCap className="size-5" /> },
];

const previousHomework = [
  { id: 1, title: 'Chapter 5 Exercises', class: 'Grade 5-A', dueDate: '2024-03-20', status: 'Active' },
  { id: 2, title: 'Geometry Worksheet', class: 'Grade 6-B', dueDate: '2024-03-22', status: 'Active' },
];

export default function Homework() {
  return (
    <DashboardLayout
      role="Teacher"
      username="teacher"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Homework</h1>
          <p className="text-gray-600 mt-1">Create and manage homework assignments</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create New Homework</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label>Class</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5-a">Grade 5-A</SelectItem>
                    <SelectItem value="6-b">Grade 6-B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter homework title" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter homework description" rows={4} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dueDate">Due Date</Label>
                <Input id="dueDate" type="date" />
              </div>

              <Button className="w-full bg-[#5a8a6f] hover:bg-[#4a7a5f]">
                Create Homework
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Previous Homework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {previousHomework.map((hw) => (
                <div
                  key={hw.id}
                  className="p-4 border rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{hw.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {hw.class} • Due: {hw.dueDate}
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
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
