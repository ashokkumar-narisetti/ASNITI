import { DashboardLayout } from '@/app/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { School, Users, Building2, FileText, Settings } from 'lucide-react';
import { Link } from 'react-router';

const navItems = [
  { path: '/super-admin', label: 'Dashboard', icon: <School className="size-5" /> },
  { path: '/super-admin/schools', label: 'Schools', icon: <Building2 className="size-5" /> },
  { path: '/super-admin/audit-logs', label: 'Audit Logs', icon: <FileText className="size-5" /> },
];

const mockSchools = [
  { id: 1, name: 'Green Valley High School', status: 'ACTIVE', users: 245, created: '2024-01-15' },
  { id: 2, name: 'Sunrise Academy', status: 'ACTIVE', users: 189, created: '2024-01-22' },
  { id: 3, name: 'Blue Mountain School', status: 'INACTIVE', users: 156, created: '2024-02-01' },
];

export default function SuperAdminDashboard() {
  return (
    <DashboardLayout
      role="Super Admin"
      username="superadmin"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">System overview and statistics</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Schools
              </CardTitle>
              <Building2 className="size-5 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">24</div>
              <p className="text-xs text-gray-500 mt-1">
                3 new this month
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Schools
              </CardTitle>
              <School className="size-5 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">22</div>
              <p className="text-xs text-gray-500 mt-1">
                91.7% active rate
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Users
              </CardTitle>
              <Users className="size-5 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">4,532</div>
              <p className="text-xs text-gray-500 mt-1">
                Across all schools
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Schools */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Recent Schools</CardTitle>
              <Link
                to="/super-admin/schools"
                className="text-sm text-[#5a8a6f] hover:underline font-medium"
              >
                View All
              </Link>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockSchools.map((school) => (
                <div
                  key={school.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="bg-[#5a8a6f] text-white rounded-full size-10 flex items-center justify-center">
                      <Building2 className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{school.name}</h3>
                      <p className="text-sm text-gray-500">
                        {school.users} users • Created {school.created}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={school.status === 'ACTIVE' ? 'default' : 'secondary'}
                    className={
                      school.status === 'ACTIVE'
                        ? 'bg-green-100 text-green-700 hover:bg-green-100'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-100'
                    }
                  >
                    {school.status}
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
