export interface Book {
    id: number;
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
    colorUrl: string;
    coverColor: string;
    videoUrl: string;
    summary: string;
}