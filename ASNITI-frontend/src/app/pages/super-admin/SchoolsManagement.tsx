import { useEffect, useState } from "react";
import { DashboardLayout } from "@/app/components/DashboardLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/dialog";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Textarea } from "@/app/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { School, Building2, FileText, Plus } from "lucide-react";
import { Link } from "react-router";
import { apiFetch } from "@/app/services/api";

const navItems = [
  { path: "/super-admin", label: "Dashboard", icon: <School className="size-5" /> },
  { path: "/super-admin/schools", label: "Schools", icon: <Building2 className="size-5" /> },
  { path: "/super-admin/audit-logs", label: "Audit Logs", icon: <FileText className="size-5" /> },
];

export default function SchoolsManagement() {
  const [schools, setSchools] = useState<any[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    adminPassword: "",
  });

  const loadSchools = async () => {
    const data = await apiFetch("/api/schools");
    setSchools(data);
  };

  useEffect(() => {
    loadSchools();
  }, []);

  const handleCreateSchool = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    await apiFetch("/api/schools", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    setModalOpen(false);
    setFormData({ name: "", address: "", adminPassword: "" });
    setLoading(false);
    loadSchools();
  };

  const toggleStatus = async (school: any) => {
    const newStatus = school.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";

    await apiFetch(`/api/schools/${school.id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status: newStatus }),
    });

    loadSchools();
  };

  return (
    <DashboardLayout role="Super Admin" username="superadmin" navItems={navItems}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Schools Management</h1>
            <p className="text-gray-600 mt-1">Manage all schools</p>
          </div>
          <Button onClick={() => setModalOpen(true)} className="bg-[#5a8a6f]">
            <Plus className="size-4 mr-2" />
            Create New School
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Schools</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>School Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schools.map((school) => (
                  <TableRow key={school.id}>
                    <TableCell>
                      <Link
                        to={`/super-admin/schools/${school.id}/users`}
                        className="text-[#5a8a6f] hover:underline"
                      >
                        {school.name}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          school.status === "ACTIVE"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }
                      >
                        {school.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {new Date(school.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleStatus(school)}
                      >
                        {school.status === "ACTIVE"
                          ? "Deactivate"
                          : "Activate"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New School</DialogTitle>
            <DialogDescription>Add a new school</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleCreateSchool}>
            <div className="space-y-4 py-4">
              <Label>School Name</Label>
              <Input
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Label>Address</Label>
              <Textarea
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              <Label>Admin Password</Label>
              <Input
                type="password"
                value={formData.adminPassword}
                onChange={(e) =>
                  setFormData({ ...formData, adminPassword: e.target.value })
                }
              />
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
