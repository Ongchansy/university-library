import { DataTable } from "./data-table";
import { db } from "@/database/drizzle";
import { books, borrowRecords } from "@/database/schema";
import { eq } from "drizzle-orm";
import { BorrowBookModel } from "../../../../type";
import { columns } from "./columns";

export default async function MainTable() {
  // Fetch raw database data
  const borrowedBooks = await db
    .select({
      id: borrowRecords.id,
      bookId: books.id,
      title: books.title,
      author: books.author,
      borrowDate: borrowRecords.borrowDate,
      dueDate: borrowRecords.dueDate,
      returnDate: borrowRecords.returnDate,
      status: borrowRecords.status,
      coverUrl: books.coverUrl,
      createdAt: borrowRecords.createdAt, // Extract actual value
    })
    .from(borrowRecords)
    .leftJoin(books, eq(borrowRecords.bookId, books.id));

  const borrowData: BorrowBookModel[] = borrowedBooks.map((borrow) => ({
    id: borrow.id,
    bookId: borrow.bookId ?? undefined, // Ensure undefined instead of null
    borrowDate: borrow.borrowDate,
    dueDate: borrow.dueDate,
    returnDate: borrow.returnDate ?? null, // Ensure null compatibility
    title: borrow.title ?? "Unknown Title", // Handle possible null values
    author: borrow.author ?? "Unknown Author",
    coverUrl: borrow.coverUrl ?? "",
    status: borrow.status as "BORROWED" | "RETURNED",
  }));


  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h1 className="text-xl font-semibold">All Borrow Requests</h1>
      </div>
      <div className="w-full overflow-x-auto">
        <DataTable columns={columns} data={borrowData} />
      </div>
    </div>
  );
}
