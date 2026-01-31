import { useState } from 'react';
import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Label } from '@/app/components/ui/label';
import { Badge } from '@/app/components/ui/badge';
import { Home, BookOpen, ClipboardCheck, FileText, GraduationCap } from 'lucide-react';

const navItems = [
  { path: '/teacher', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/teacher/classes', label: 'My Classes', icon: <BookOpen className="size-5" /> },
  { path: '/teacher/attendance', label: 'Attendance', icon: <ClipboardCheck className="size-5" /> },
  { path: '/teacher/homework', label: 'Homework', icon: <FileText className="size-5" /> },
  { path: '/teacher/marks', label: 'Marks Entry', icon: <GraduationCap className="size-5" /> },
];

const students = [
  { id: 1, name: 'Alice Johnson', rollNo: '001' },
  { id: 2, name: 'Bob Smith', rollNo: '002' },
  { id: 3, name: 'Charlie Brown', rollNo: '003' },
];

export default function Attendance() {
  const [selectedClass, setSelectedClass] = useState('');
  const [attendance, setAttendance] = useState<Record<number, 'present' | 'absent'>>({});

  const toggleAttendance = (id: number) => {
    setAttendance(prev => ({
      ...prev,
      [id]: prev[id] === 'present' ? 'absent' : 'present'
    }));
  };

  return (
    <DashboardLayout
      role="Teacher"
      username="teacher"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-600 mt-1">Mark student attendance</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Mark Attendance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Select Class</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a class" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5-a">Grade 5-A</SelectItem>
                  <SelectItem value="6-b">Grade 6-B</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedClass && (
              <>
                <div className="space-y-3">
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-500">Roll No: {student.rollNo}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant={attendance[student.id] === 'present' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setAttendance({ ...attendance, [student.id]: 'present' })}
                          className={attendance[student.id] === 'present' ? 'bg-green-500 hover:bg-green-600' : ''}
                        >
                          Present
                        </Button>
                        <Button
                          variant={attendance[student.id] === 'absent' ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setAttendance({ ...attendance, [student.id]: 'absent' })}
                          className={attendance[student.id] === 'absent' ? 'bg-red-500 hover:bg-red-600' : ''}
                        >
                          Absent
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-[#5a8a6f] hover:bg-[#4a7a5f]">
                  Submit Attendance
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
