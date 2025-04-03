"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { borrowBook, checkIfBookBorrowed } from "@/lib/action/borrowBook";
import {BorrowBookParam} from "@/type";

const BorrowButton = ({ bookId, userId }: BorrowBookParam) => {
    const [isBorrowed, setIsBorrowed] = useState<boolean | null>(null); // Use null as the initial state
    const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state for button actions
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Error message state

    // Check if the book is already borrowed when the component mounts
    useEffect(() => {
        const fetchBorrowStatus = async () => {
            try {
                const result = await checkIfBookBorrowed(userId, bookId);
                setIsBorrowed(result); // Update the state based on the result
            } catch (error) {
                console.error("Error fetching borrow status:", error);
                setErrorMessage("Failed to fetch borrow status.");
            }
        };

        fetchBorrowStatus();
    }, [userId, bookId]); // Re-run the effect when userId or bookId changes

    const handleBorrow = async () => {
        setIsLoading(true); // Set loading state
        setErrorMessage(null); // Clear any previous error messages

        try {
            const response = await borrowBook({ bookId, userId });
            if (response.success) {
                setIsBorrowed(true); // Update the state to reflect the borrowed status
            } else {
                setErrorMessage('Success'); // Display the error message
            }
        } catch (error) {
            console.error("Error borrowing book:", error);
            setErrorMessage("An unexpected error occurred while borrowing the book.");
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <Button
                className={`book-overview_btn`}
                onClick={handleBorrow}
                disabled={isBorrowed || isLoading} // Disable the button if the book is borrowed or loading
            >
                <Image src={`/icons/book.svg`} alt={`book`} width={20} height={20} />
                <p className={`font-bebas-neue text-xl text-dark-100`}>
                    {isLoading
                        ? "Processing..."
                        : isBorrowed === null
                        ? "Loading..."
                        : isBorrowed
                        ? "Borrowed"
                        : "Borrow Book"}
                </p>
            </Button>
            {errorMessage && (
                <p className="text-red-500 mt-2 text-sm">{errorMessage}</p> // Display error message
            )}
        </div>
    );
};

export default BorrowButton;