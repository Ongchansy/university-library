import React from "react";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  // Fetch data based on id
  const [bookDetails] = await db
    .select()
    .from(books)
    .where(eq(books.id, id))
    .limit(1);

    const bookList = await db
    .select()
    .from(books)
    .where(eq(books.genre,bookDetails.genre))

  if (!bookDetails) redirect("/404");

  return (
    <>
      <BookOverview {...bookDetails}  />

      <div className="book-details">
        <div className="flex-[1.5]">

          <section className="mt-10 flex flex-col gap-7">
            <h3>Summary</h3>
            <div className="space-y-5 text-xl text-light-100">
              {bookDetails.summary.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/*  SIMILAR*/}
      <h1 className="text-3xl text-white font-bold">Similar Books</h1>
      <BookList bookList={bookList} />
    </>
  );
};
export default Page;
