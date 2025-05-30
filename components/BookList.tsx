import React from 'react'
import BookCard from "@/components/BookCard";
import {BookData} from "@/type";

interface Props {
    title?: string
    bookList: BookData[] | undefined,
    containerClassName?: string
}

const BookList = ({
    title,
    bookList,
    containerClassName
}: Props) => {
    return (
        <section className={containerClassName}>
            <h2 className={`font-bebas-neue text-4xl text-light-100`}>{title}</h2>

            <ul className={`book-list`}>
                {
                    bookList?.map((book: BookData) => (
                        <BookCard key={book.id} {...book} />
                    ))
                }
            </ul>
        </section>
    )
}
export default BookList
