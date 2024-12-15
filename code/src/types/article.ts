export interface Article {
  id: number;
  date_created: string;
  nazev: string;
  autor: number;
  text_clanku: string;
  status: "navrh" | "Odeslano";
}
