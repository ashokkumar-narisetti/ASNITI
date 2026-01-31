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
import { School, Building2, FileText } from 'lucide-react';

const navItems = [
  { path: '/super-admin', label: 'Dashboard', icon: <School className="size-5" /> },
  { path: '/super-admin/schools', label: 'Schools', icon: <Building2 className="size-5" /> },
  { path: '/super-admin/audit-logs', label: 'Audit Logs', icon: <FileText className="size-5" /> },
];

const mockLogs = [
  { id: 1, actor: 'superadmin', role: 'Super Admin', action: 'Created new school "Sunrise Academy"', date: '2024-03-15 10:30:45' },
  { id: 2, actor: 'admin.school1', role: 'School Admin', action: 'Added teacher "john.teacher"', date: '2024-03-15 09:15:22' },
  { id: 3, actor: 'superadmin', role: 'Super Admin', action: 'Deactivated school "Old Academy"', date: '2024-03-14 16:45:10' },
  { id: 4, actor: 'admin.school2', role: 'School Admin', action: 'Modified class "Grade 10-A"', date: '2024-03-14 14:20:33' },
  { id: 5, actor: 'superadmin', role: 'Super Admin', action: 'Activated school "Blue Mountain School"', date: '2024-03-14 11:55:18' },
];

export default function AuditLogs() {
  return (
    <DashboardLayout
      role="Super Admin"
      username="superadmin"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Audit Logs</h1>
          <p className="text-gray-600 mt-1">System activity and changes history</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Actor Username</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Date & Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-medium">{log.actor}</TableCell>
                    <TableCell>{log.role}</TableCell>
                    <TableCell>{log.action}</TableCell>
                    <TableCell className="text-gray-500">{log.date}</TableCell>
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
