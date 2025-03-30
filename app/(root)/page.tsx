import React from 'react'
import BookOverview from "@/components/BookOverview";
import BookList from "@/components/BookList";
import { books } from '../admin/books/_dummy/data';


const Page = async () => {
    return (
        <>
            <BookOverview {...books[0]} />

            <BookList
                title="Latest Books"
                bookList={books}
                containerClassName="mt-28"
            />
        </>
    )
}
export default Page
