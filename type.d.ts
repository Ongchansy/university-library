export interface Book {
    id?:string;
    title: string;
    author: string;
    rating: number;
    genre: string;
    totalCopies: number;
    availableCopies: number;
    description: string;
    colorUrl?: string;
    coverColor: string;
    videoUrl: string;
    summary: string;
    isLoanedBook?: boolean;
    createdAt?: Date
}

export interface BookData {
    id: string;
    title: string;
    author: string;
    genre: string;
    rating: number; // Changed from float to number
    totalCopies: number; // Fixed casing
    availableCopies: number;
    description: string;
    coverUrl: string; // Fixed casing
    coverColor: string; // Fixed casing
    videoUrl: string; // Fixed casing
    summary: string;
    isLoanedBook?: boolean;
    createdAt?: Date | null; // Fixed casing
}

export interface Credentials {
    fullName: string;
    email: string;
    password: string;
    universityId: string;
    universityCard:string;
}

export interface BookParams {
    title: string;
    author: string;
    rating: number;
    genre: string;
    totalCopies: number;
    availableCopies: number;
    description: string;
    coverUrl: string;
    coverColor: string;
    videoUrl: string;
    summary: string;
}