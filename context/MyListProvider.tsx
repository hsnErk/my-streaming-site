"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface MyListStore {
  ids: number[];
  add(id: number): void;
  remove(id: number): void;
  has(id: number): boolean;
}

const MyListContext = createContext<MyListStore | null>(null);

export function useMyList() {
  const ctx = useContext(MyListContext);
  if (!ctx) throw new Error("useMyList must be used within MyListProvider");
  return ctx;
}

export function MyListProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<number[]>([]);

  useEffect(() => {
    // Hydrate the list from localStorage after mount (not available during SSR).
    const stored = localStorage.getItem("myList");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time client-side hydration from browser storage
    if (stored) setIds(JSON.parse(stored) as number[]);
  }, []);

  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(ids));
  }, [ids]);

  const add = (id: number) =>
    setIds(prev => (prev.includes(id) ? prev : [...prev, id]));
  const remove = (id: number) =>
    setIds(prev => prev.filter(x => x !== id));
  const has = (id: number) => ids.includes(id);

  return (
    <MyListContext.Provider value={{ ids, add, remove, has }}>
      {children}
    </MyListContext.Provider>
  );
}
