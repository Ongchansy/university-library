import Link from "next/link";
import { DataTable } from "./data-table";
import { Plus } from "lucide-react";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { desc } from "drizzle-orm";
import { BookData } from "@/type"; // Ensure correct import
import { columns } from "./columns";

export default async function MainTable() {
  // Fetch raw database data
  const rawBookData = await db
    .select()
    .from(books)
    .orderBy(desc(books.createdAt));

  // Transform database result to match `BookData`
  const bookData: BookData[] = rawBookData.map((book) => ({
    ...book,
    createdAt: book.createdAt ?? null,
  }));

  return (
    <div>
      <div className="flex justify-between items-center py-5">
        <h1 className="text-xl font-semibold">All Books</h1>
        <Link
          href="/admin/books/create"
          className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md flex items-center"
        >
          <Plus size={14} className="mr-2" />
          Create a new Book
        </Link>
      </div>
      <DataTable columns={columns} data={bookData} />
    </div>
  );
}
