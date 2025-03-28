export interface Book {
    id?: number;
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
    isLoanedBook?: boolean;
    createdAt?: Date
}

export interface BookData {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: float;
    total_copies: number;
    available_copies: number;
    description: string;
    color: string;
    cover: string;
    video: string;
    summary: string;
    isLoanedBook?: boolean;
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