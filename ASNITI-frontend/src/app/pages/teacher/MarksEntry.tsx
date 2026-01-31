import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Home, BookOpen, ClipboardCheck, FileText, GraduationCap } from 'lucide-react';

const navItems = [
  { path: '/teacher', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/teacher/classes', label: 'My Classes', icon: <BookOpen className="size-5" /> },
  { path: '/teacher/attendance', label: 'Attendance', icon: <ClipboardCheck className="size-5" /> },
  { path: '/teacher/homework', label: 'Homework', icon: <FileText className="size-5" /> },
  { path: '/teacher/marks', label: 'Marks Entry', icon: <GraduationCap className="size-5" /> },
];

export default function MarksEntry() {
  return (
    <DashboardLayout
      role="Teacher"
      username="teacher"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Marks Entry</h1>
          <p className="text-gray-600 mt-1">Enter and manage student marks</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Enter Marks</CardTitle>
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
                <Label>Student</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select student" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Alice Johnson</SelectItem>
                    <SelectItem value="2">Bob Smith</SelectItem>
                    <SelectItem value="3">Charlie Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter subject" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="examName">Exam Name</Label>
                <Input id="examName" placeholder="e.g., Mid-term, Final" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="marks">Marks</Label>
                <Input id="marks" type="number" placeholder="Enter marks" />
              </div>

              <Button className="w-full bg-[#5a8a6f] hover:bg-[#4a7a5f]">
                Submit Marks
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
