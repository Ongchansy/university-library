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

export const books: Book[] = [
  {
    id: '1',
    title: 'The Alchemist',
    author: 'Paul',
    rating: 4,
    genre: 'Adventure',
    totalCopies: 10,
    availableCopies: 5,
    description: 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
    colorUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Ha3OShqSL._AC_UL254_SR254,254_.jpg',
    coverColor: 'teal',
    videoUrl: 'https://youtu.be/DXRNk59JAcc',
    summary: 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
    createdAt: '2021-09-01',
  },
  {
    id: '2',
    title: 'The Alchemist',
    author: 'Paul',
    rating: 4,
    genre: 'Adventure',
    totalCopies: 10,
    availableCopies: 5,
    description: 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
    colorUrl: 'https://images-na.ssl-images-amazon.com/images/I/71Ha3OShqSL._AC_UL254_SR254,254_.jpg',
    coverColor: 'teal',
    videoUrl: 'https://youtu.be/DXRNk59JAcc',
    summary: 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.',
    createdAt: '2021-09-01',
  }
]
  