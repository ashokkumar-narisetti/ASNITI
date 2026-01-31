import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { apiFetch } from "@/app/services/api";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function AddTeacherModal({ open, onClose, onSuccess }: Props) {
  const [form, setForm] = useState({
    name: "",
    username: "",
    mobile: "",
    password: "",
    className: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await apiFetch("/api/teachers", {
        method: "POST",
        body: JSON.stringify(form),
      });
      onSuccess();
      onClose();
    } catch (err: any) {
      alert(err.message || "Failed to create teacher");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Add Teacher</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div>
            <Label>Full Name</Label>
            <Input name="name" value={form.name} onChange={handleChange} />
          </div>

          <div>
            <Label>Username</Label>
            <Input name="username" value={form.username} onChange={handleChange} />
          </div>

          <div>
            <Label>Mobile Number</Label>
            <Input name="mobile" value={form.mobile} onChange={handleChange} />
          </div>

          <div>
            <Label>Temporary Password</Label>
            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Assign Class (optional)</Label>
            <Input
              name="className"
              value={form.className}
              onChange={handleChange}
              placeholder="Grade 5-A"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Creating..." : "Create Teacher"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
