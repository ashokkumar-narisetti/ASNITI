import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { DashboardLayout } from "@/app/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { School, Users, ArrowLeft } from "lucide-react";
import { apiFetch } from "@/app/services/api";

const navItems = [
  { path: "/super-admin", label: "Dashboard", icon: <School className="size-5" /> },
  { path: "/super-admin/schools", label: "Schools", icon: <Users className="size-5" /> },
];

export default function SchoolUsers() {
  const { schoolId } = useParams();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const loadUsers = async () => {
    try {
      const data = await apiFetch(`/api/schools/${schoolId}/users`);
      setUsers(data);
    } catch (err) {
      console.error("Failed to load school users", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [schoolId]);

  return (
    <DashboardLayout
      role="Super Admin"
      username="superadmin"
      navItems={navItems}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link to="/super-admin/schools">
            <Button variant="outline" size="sm">
              <ArrowLeft className="size-4 mr-2" />
              Back
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            School Users
          </h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Users List</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Username</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {loading && (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center">
                      Loading users...
                    </TableCell>
                  </TableRow>
                )}

                {!loading && users.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center text-gray-500">
                      No users found
                    </TableCell>
                  </TableRow>
                )}

                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">
                      {user.username}
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={
                          user.role === "SCHOOL_ADMIN"
                            ? "bg-blue-100 text-blue-700"
                            : user.role === "TEACHER"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }
                      >
                        {user.role.replace("_", " ")}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={
                          user.active
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                      >
                        {user.active ? "Active" : "Inactive"}
                      </Badge>
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
