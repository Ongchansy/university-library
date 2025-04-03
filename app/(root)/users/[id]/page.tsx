import React from "react";
import { db } from "@/database/drizzle";
import { users, borrowRecords, books } from "@/database/schema";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";


const Page = async ({ params }: { params: Promise<{ id: string } > }) => {
  const { id } = await params; // Correct destructuring

  try {
    // Fetch user details
    const user = await db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .then((res) => res[0]); // Ensure only one user is retrieved

    if (!user) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <p className="text-lg text-red-500">User not found</p>
        </div>
      );
    }

    // Fetch borrowed books for the user
    const borrowedBooks = await db
      .select({
        bookId: books.id,
        title: books.title,
        author: books.author,
        borrowDate: borrowRecords.borrowDate,
        dueDate: borrowRecords.dueDate,
        returnDate: borrowRecords.returnDate,
        status: borrowRecords.status,
        coverUrl: books.coverUrl,
      })
      .from(borrowRecords)
      .leftJoin(books, eq(borrowRecords.bookId, books.id))
      .where(eq(borrowRecords.userId, id));

    return (
      <div className="grid grid-cols-[2fr,3fr] gap-8 bg-gray-100 p-6">
        <Card className="w-full h-[550px] shadow-xl border rounded-lg bg-white">
          <CardHeader className="text-center border-b p-6">
            <CardTitle className="text-2xl font-semibold capitalize text-gray-800">
              {user.fullName}&apos;s Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 grid grid-cols-1 gap-6">
            <div className="flex justify-center relative h-[200px] w-full">
              <Image
                src={user.universityCard}
                alt={user.fullName}
                fill
                className="rounded-lg shadow-md border object-cover"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Email:</span> {user.email}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">User ID:</span> {user.universityId}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Role:</span> {user.role}
              </p>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Account Status:</span> {user.status}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Borrowed Books Section */}
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Borrowed Books</h2>
          {borrowedBooks.length > 0 ? (
            <div className="grid grid-cols-1 gap-4">
              {borrowedBooks.map((book) => (
                <Card key={book.bookId} className="shadow-md border rounded-lg p-4">
                  <div className="mb-4 w-full h-[250px] relative">
                    {book.coverUrl && (
                      <Image src={book.coverUrl} alt={book.coverUrl} fill className="object-cover absolute" />
                    )}
                  </div>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Title:</span> {book.title}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Author:</span> {book.author}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Borrow Date:</span>{" "}
                    {book.borrowDate ? format(new Date(book.borrowDate), "yyyy-MM-dd") : "N/A"}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Due Date:</span>{" "}
                    {book.dueDate ? format(new Date(book.dueDate), "yyyy-MM-dd") : "N/A"}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Status:</span> {book.status}
                  </p>
                  {book.returnDate && (
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Return Date:</span>{" "}
                      {format(new Date(book.returnDate), "yyyy-MM-dd")}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-lg text-gray-700">No borrowed books found.</p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching user data:", error);
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-red-500">An error occurred while fetching user data.</p>
      </div>
    );
  }
};

export default Page;