import { authClient } from "@/lib/auth-client";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

export const Logout = () => {
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <Button className="cursor-pointer" onClick={handleLogout}>
      Logout
      <LogOut className="size-4 ml-2" />
    </Button>
  );
};
