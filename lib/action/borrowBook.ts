"use server";

import { db } from "@/database/drizzle";
import { borrowRecords } from "@/database/schema";
import { BorrowBookParam } from "@/type";
import { format } from "date-fns";
import { and, eq } from "drizzle-orm";

export const checkIfBookBorrowed = async (userId: string , bookId: string): Promise<boolean> => {
    try {
        // Query the borrow records to check if the book is borrowed
        const borrowRecord = await db
            .select()
            .from(borrowRecords)
            .where(
                and(
                    eq(borrowRecords.userId, userId), // Filter by userId
                    eq(borrowRecords.bookId, bookId), // Filter by bookId
                    eq(borrowRecords.status, "BORROWED") // Check if the book is borrowed
                )
            );

        return borrowRecord.length > 0; // Return true if a borrow record exists, else false
    } catch (error) {
        console.error("Error checking borrow record:", error);
        return false; // In case of an error, consider the book as not borrowed
    }
};

export const borrowBook = async ({ userId, bookId }: BorrowBookParam) => {
    try {
        // Ensure required parameters are provided
        if (!userId || !bookId) {
            throw new Error("User ID and Book ID are required.");
        }

        // Check if the book is already borrowed
        const isBorrowed = await checkIfBookBorrowed(userId, bookId);
        if (isBorrowed) {
            throw new Error("This book is already borrowed.");
        }

        // Calculate due date (14 days from today)
        const dueDate = format(new Date(new Date().setDate(new Date().getDate() + 14)), "yyyy-MM-dd");

        // Insert borrow record into the database
        const borrow = await db
            .insert(borrowRecords)
            .values({
                userId,
                bookId,
                dueDate,
                status: "BORROWED", // Add status field if applicable
            })
            .returning();

        return { success: true, message: "Book borrowed successfully", borrow };
    } catch (error) {
        console.error("Error borrowing book:", error);
        return { success: false, message: error|| "An unexpected error occurred" };
    }
};

export const handleBorrow = async ({ bookId, userId }: BorrowBookParam) => {
    const response = await borrowBook({ bookId, userId });

    if (response.success) {
        // Replace alert with a toast notification or UI feedback
        console.log("Book borrowed successfully!");
    } else {
        // Replace alert with a toast notification or UI feedback
        console.error("Error: " + response.message);
    }
};


export const getBorrowRecord = async () => {
    const data = db.select().from(borrowRecords)
    return data
}