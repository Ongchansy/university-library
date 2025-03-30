'use client';

import { books } from '@/app/admin/books/_dummy/data';
import BookList from '@/components/BookList';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');



  // Filter books based on title, author, or genre
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      <div>
        <BookList
          title="Latest Books"
          bookList={filteredBooks} // Show filtered books
          containerClassName="mt-28"
        />
      </div>
    </div>
  );
};

export default Page;
