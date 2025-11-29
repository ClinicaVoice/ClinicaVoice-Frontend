// src/auth/useAuthRole.js
import { useEffect, useState } from "react";

export function useAuthRole() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = sessionStorage.getItem("clinica_role");

    if (!storedRole) {
      setRole(null);
      return;
    }

    // normalize
    if (["admin", "doctor", "patient"].includes(storedRole)) {
      setRole(storedRole);
    } else {
      setRole(null);
    }
  }, []);

  return role;
}
