import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/app/components/ui/table';
import { Home, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

const navItems = [
  { path: '/parent', label: 'Dashboard', icon: <Home className="size-5" /> },
  { path: '/parent/children', label: 'My Children', icon: <Users className="size-5" /> },
];

const marks = [
  { id: 1, subject: 'Mathematics', examName: 'Mid-term', score: 85, total: 100 },
  { id: 2, subject: 'Science', examName: 'Mid-term', score: 78, total: 100 },
  { id: 3, subject: 'English', examName: 'Mid-term', score: 92, total: 100 },
  { id: 4, subject: 'Social Studies', examName: 'Mid-term', score: 88, total: 100 },
];

export default function MarksView() {
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
          <h1 className="text-3xl font-bold text-gray-900">Marks - Alice Johnson</h1>
          <p className="text-gray-600 mt-1">View exam results and scores</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Subject-wise Marks</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Exam Name</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Percentage</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {marks.map((mark) => (
                  <TableRow key={mark.id}>
                    <TableCell className="font-medium">{mark.subject}</TableCell>
                    <TableCell>{mark.examName}</TableCell>
                    <TableCell>{mark.score}/{mark.total}</TableCell>
                    <TableCell>
                      <span className={`font-semibold ${
                        (mark.score / mark.total) * 100 >= 80
                          ? 'text-green-600'
                          : (mark.score / mark.total) * 100 >= 60
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}>
                        {((mark.score / mark.total) * 100).toFixed(1)}%
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
