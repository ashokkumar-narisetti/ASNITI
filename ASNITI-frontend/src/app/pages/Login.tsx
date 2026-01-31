import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "@/app/services/authApi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("LOGIN BUTTON CLICKED");

    try {
      setLoading(true);

      const data = await loginUser(username, password);
      console.log("LOGIN API RESPONSE:", data);

      // Store token
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);

      // FORCE password change
      if (data.mustChangePassword) {
        navigate("/change-password");
        return;
      }

      // Role-based navigation (MATCH BACKEND ROLES)
      switch (data.role) {
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
    } catch (error: any) {
      console.error("LOGIN ERROR:", error);
      alert(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* Left Section - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#1e3a32] flex-col items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="flex flex-col items-center justify-center z-10">
          <div className="bg-[#f5f1e8] rounded-full w-52 h-52 flex items-center justify-center shadow-2xl">
            <h1
              className="text-black text-5xl font-bold tracking-tight"
              style={{ fontFamily: "'Alegreya Sans', sans-serif" }}
            >
              ASNITI
            </h1>
          </div>
          <p className="text-[#f5f1e8] text-2xl font-medium mt-8">
            Manage Smarter, Teach Better
          </p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 bg-[#a8c4b4] flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              Welcome To ASNITI
            </h2>
            <p className="text-gray-700">Login To Continue</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    checked={rememberMe}
                    onCheckedChange={(c) => setRememberMe(c as boolean)}
                  />
                  <span className="text-sm">Remember me</span>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#5a8a6f] hover:bg-[#4a7a5f] py-6"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
