import { BookData } from "@/type";

export type Book = {
  id:string;
  title: string;
  author: string;
  rating: number;
  genre: string;
  totalCopies: number;
  availableCopies: number;
  description: string;
  colorUrl: string;
  coverColor: string;
  videoUrl: string;
  summary: string;
  createdAt?: string;
}

export type Books = Book[]

export const books: BookData[] = [
  {
    id: '1',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    rating: 4,
    genre: 'Adventure',
    totalCopies: 10,
    availableCopies: 5,
    description:
      'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Ha3OShqSL._AC_UL254_SR254,254_.jpg',
    coverColor: 'teal',
    videoUrl: 'https://youtu.be/DXRNk59JAcc',
    summary:
      'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
  },
  {
    id: '2',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    rating: 4,
    genre: 'Adventure',
    totalCopies: 10,
    availableCopies: 5,
    description:
      'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Ha3OShqSL._AC_UL254_SR254,254_.jpg',
    coverColor: 'teal',
    videoUrl: 'https://youtu.be/DXRNk59JAcc',
    summary:
      'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
  },
];

  