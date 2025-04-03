import React from 'react'
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { db } from '@/database/drizzle';
import { books } from '@/database/schema';


const Page = async () => {
    const data = await db.select().from(books)
    
    return (
        <>
            <BookOverview {...data[0]} />

            <BookList
                title="Latest Books"
                bookList={data}
                containerClassName="mt-28"
            />
        </>
    )
}
export default Page
