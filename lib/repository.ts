import { contents, type Content, type CardContent } from "@/data/contents";

export interface ContentRepository {
  getAll(): Promise<CardContent[]>;
  getById(id: number): Promise<Content | null>;
  search(query: string): Promise<CardContent[]>;
  similarTo(id: number): Promise<CardContent[]>;
}

// Turkish genre terms mapped to the English genre names used in the data,
// so a search like "bilim kurgu" still finds Sci-Fi titles.
const turkishGenreAliases: Record<string, string> = {
  "bilim kurgu": "sci-fi",
  "bilimkurgu": "sci-fi",
  "aksiyon": "action",
  "komedi": "comedy",
  "dram": "drama",
  "korku": "horror",
  "suç": "crime",
  "suc": "crime",
  "macera": "adventure",
  "fantastik": "fantasy",
  "fantezi": "fantasy",
  "romantik": "romance",
  "romantizm": "romance",
  "animasyon": "animation",
  "tarih": "history",
  "gerilim": "thriller",
};

export const mockRepository: ContentRepository = {
  async getAll() {
    return contents;
  },
  async getById(id) {
    return contents.find(c => c.id === id) ?? null;
  },
  async search(query) {
    const q = query.toLowerCase().trim();
    // Resolve Turkish genre terms to their English equivalents.
    // (Min length guard keeps 1–2 letter queries from matching everything.)
    const aliasGenres =
      q.length >= 3
        ? Object.entries(turkishGenreAliases)
            .filter(([tr]) => tr.includes(q) || q.includes(tr))
            .map(([, en]) => en)
        : [];
    return contents.filter(c =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.genre.some(g => g.toLowerCase().includes(q)) ||
      c.cast.some(a => a.toLowerCase().includes(q)) ||
      c.genre.some(g => aliasGenres.includes(g.toLowerCase()))
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
