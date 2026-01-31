import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { apiFetch } from "@/app/services/api";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await apiFetch("/api/auth/change-password", {
        method: "POST",
        body: JSON.stringify({ newPassword }),
      });

      // ✅ Replace token with new one
      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.role);

      // ✅ Redirect correctly
      switch (res.role) {
        case "SUPER_ADMIN":
          navigate("/super-admin");
          break;
        case "SCHOOL_ADMIN":
          navigate("/school-admin");
          break;
        case "TEACHER":
          navigate("/teacher");
          break;
        case "PARENT":
          navigate("/parent");
          break;
        default:
          navigate("/");
      }
    } catch (err: any) {
      alert(err.message || "Password change failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#a8c4b4]">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className="text-center mb-6">
          <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-[#f5f1e8] flex items-center justify-center font-bold">
            ASNITI
          </div>
          <h2 className="text-2xl font-semibold">Change Password</h2>
          <p className="text-sm text-gray-600 mt-1">
            You must change your password on first login
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label>Old Password</Label>
            <Input
              type={show ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>New Password</Label>
            <Input
              type={show ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <Label>Confirm New Password</Label>
            <Input
              type={show ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={show}
              onChange={() => setShow(!show)}
            />
            Show passwords
          </div>

          <Button
            type="submit"
            className="w-full bg-[#5a8a6f] hover:bg-[#4a7a5f]"
            disabled={loading}
          >
            {loading ? "Updating..." : "Change Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}
