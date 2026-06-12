"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Hydrate auth state from localStorage after mount (localStorage is not
    // available during server rendering, so this cannot be a lazy initializer).
    const saved = localStorage.getItem("user");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-side hydration from browser storage
    if (saved) setUser(JSON.parse(saved) as User);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (loading) return;
    const onLoginPage = pathname === "/login";
    if (!user && !onLoginPage) router.replace("/login");
    if (user && onLoginPage) router.replace("/");
  }, [user, loading, pathname, router]);

  const login = async (email: string, password: string): Promise<boolean> => {
    if (email === "test@example.com" && password === "123456") {
      const u = { email };
      setUser(u);
      localStorage.setItem("user", JSON.stringify(u));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
