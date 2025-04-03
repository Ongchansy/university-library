'use client';

import React, { Suspense, useEffect, useState, useDeferredValue } from 'react';
import BookList from '@/components/BookList';
import { Input } from '@/components/ui/input';
import { getBooks } from './action';
import { BookData } from '@/type';
import Loading from '@/components/loading';

// Wrap the book list fetching in a component that can suspend
const BookListWithData = ({ searchQuery }: { searchQuery: string }) => {
  const [books, setBooks] = useState<BookData[]>([]);
  const deferredQuery = useDeferredValue(searchQuery);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getBooks();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(deferredQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(deferredQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <BookList
      title={deferredQuery ? "Search Results" : "Latest Books"}
      bookList={filteredBooks}
      containerClassName="mt-28"
    />
  );
};

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="p-4 text-white">
      <div className="mt-4 flex flex-col items-center justify-center">
        <p className="mb-3 text-xl font-base">Discover Your Next Great Read:</p>
        <h1 className="text-5xl font-bold line-clamp-4">
          Explore and Search for<br />
          <span className="text-light-200">Any Book</span> In Our Library
        </h1>
        <div className="mt-8 w-full max-w-lg">
          <Input
            placeholder="Search for books"
            className="p-8 bg-[#232839] placeholder:text-white placeholder:text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Suspense fallback={
          <Loading />
      }>
        <BookListWithData searchQuery={searchQuery} />
      </Suspense>
    </div>
  );
};

export default Page;