import { useState } from 'react';
import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Home, Users, GraduationCap, BookOpen, Building2, Plus } from 'lucide-react';

const navItems = [
  { path: '/school-admin', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/school-admin/profile', label: 'School Profile', icon: <Building2 className="size-5" /> },
  { path: '/school-admin/teachers', label: 'Teachers', icon: <Users className="size-5" /> },
  { path: '/school-admin/classes', label: 'Classes', icon: <BookOpen className="size-5" /> },
  { path: '/school-admin/students', label: 'Students', icon: <GraduationCap className="size-5" /> },
];

const mockStudents = [
  { id: 1, name: 'Alice Johnson', class: 'Grade 5-A', parent: 'parent.alice' },
  { id: 2, name: 'Bob Smith', class: 'Grade 6-B', parent: 'parent.bob' },
  { id: 3, name: 'Charlie Brown', class: 'Grade 5-A', parent: 'parent.charlie' },
];

export default function StudentsManagement() {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    parentUsername: '',
    parentPassword: '',
  });

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    setModalOpen(false);
    setFormData({ name: '', class: '', parentUsername: '', parentPassword: '' });
  };

  return (
    <DashboardLayout
      role="School Admin"
      username="admin"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Students Management</h1>
            <p className="text-gray-600 mt-1">Manage all students in your school</p>
          </div>
          <Button
            onClick={() => setModalOpen(true)}
            className="bg-[#5a8a6f] hover:bg-[#4a7a5f]"
          >
            <Plus className="size-4 mr-2" />
            Create Student
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Students</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Student Name</TableHead>
                  <TableHead>Class</TableHead>
                  <TableHead>Parent Username</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockStudents.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell className="font-medium">{student.name}</TableCell>
                    <TableCell>{student.class}</TableCell>
                    <TableCell>{student.parent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Create Student Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Student</DialogTitle>
            <DialogDescription>
              Add a new student and create parent account
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateStudent}>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Student Full Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter student full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="class">Class</Label>
                <Select value={formData.class} onValueChange={(value) => setFormData({ ...formData, class: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-a">Grade 1-A</SelectItem>
                    <SelectItem value="2-b">Grade 2-B</SelectItem>
                    <SelectItem value="3-a">Grade 3-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentUsername">Parent Username</Label>
                <Input
                  id="parentUsername"
                  value={formData.parentUsername}
                  onChange={(e) => setFormData({ ...formData, parentUsername: e.target.value })}
                  placeholder="Create parent username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="parentPassword">Parent Password</Label>
                <Input
                  id="parentPassword"
                  type="password"
                  value={formData.parentPassword}
                  onChange={(e) => setFormData({ ...formData, parentPassword: e.target.value })}
                  placeholder="Set parent password"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="bg-[#5a8a6f] hover:bg-[#4a7a5f]">
                Create Student
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
