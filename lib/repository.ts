import { contents, type Content, type CardContent } from "@/data/contents";

export interface ContentRepository {
  getAll(): Promise<CardContent[]>;
  getById(id: number): Promise<Content | null>;
  search(query: string): Promise<CardContent[]>;
  similarTo(id: number): Promise<CardContent[]>;
}

export const mockRepository: ContentRepository = {
  async getAll() {
    return contents;
  },
  async getById(id) {
    return contents.find(c => c.id === id) ?? null;
  },
  async search(query) {
    const q = query.toLowerCase();
    return contents.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.genre.some(g => g.toLowerCase().includes(q)) ||
      c.cast.some(a => a.toLowerCase().includes(q))
    );
  },
  async similarTo(id) {
    const target = contents.find(c => c.id === id);
    if (!target) return [];
    return contents.filter(c =>
      c.id !== target.id &&
      c.genre.some(g => target.genre.includes(g))
    );
  },
};

export const repository: ContentRepository = mockRepository;