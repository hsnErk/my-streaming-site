"use client";
import { useState, type FormEvent } from "react";
import { useAuth } from "@/context/AuthProvider";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const ok = await login(email, password);
    if (!ok) setError("Invalid credentials. Try test@example.com / 123456");
    setSubmitting(false);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-neutral-950 via-neutral-900 to-black px-4">
      <div className="w-full max-w-md rounded-md border border-neutral-800 bg-black/80 p-8 text-white shadow-2xl sm:px-14 sm:py-16">
        <h1 className="mb-7 text-3xl font-bold">Sign In</h1>
        {error && (
          <div className="mb-4 rounded border border-red-600/40 bg-red-600/20 p-3 text-sm text-red-400">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email (test@example.com)" required
            className="w-full rounded bg-neutral-800 px-5 py-3.5 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-red-600"
          />
          <input
            type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (123456)" required
            className="w-full rounded bg-neutral-800 px-5 py-3.5 text-white placeholder-neutral-500 outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit" disabled={submitting}
            className="flex w-full items-center justify-center rounded bg-red-600 py-3.5 font-semibold hover:bg-red-700 disabled:bg-red-700/50"
          >
            {submitting ? <Loader2 className="animate-spin" size={20} /> : "Sign In"}
          </button>
        </form>
        <div className="mt-10 border-t border-neutral-800 pt-6 text-xs text-neutral-400">
          <p className="font-mono">Email: test@example.com</p>
          <p className="font-mono">Password: 123456</p>
        </div>
      </div>
    </main>
  );
}