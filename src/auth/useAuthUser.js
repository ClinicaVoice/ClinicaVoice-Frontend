import { useEffect, useState } from 'react';

export function useAuthUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const raw = sessionStorage.getItem('clinica_user');
    if (!raw) {
      setUser(null);
      return;
    }
    try {
      setUser(JSON.parse(raw));
    } catch {
      setUser(null);
    }
  }, []);

  return user;
}
