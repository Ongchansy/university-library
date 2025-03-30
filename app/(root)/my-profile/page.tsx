import React from "react";
import BookList from "@/components/BookList";
import Image from "next/image";
import { books } from "@/app/admin/books/_dummy/data";

const Page = () => {
    return (
        <>
            
            <div className="grid grid-cols-2 gap-10 ">
                <div className="flex flex-col gap-10 bg-slate-800 p-14">
                    <div className="flex items-center gap-10">
                        <Image src={books[0].coverColor} alt={books[0].title} width={100} height={100} />
                        <div>
                            <h1 className="text-2xl font-bold">{books[0].title}</h1>
                            <p>{books[0].author}</p>
                            <p>{books[0].genre}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4">University</h3>
                        <p>PHNOM PENH INTERNATIONAL</p>
                    </div>
                    
                    <div>
                        <h3 className="mb-4">Student ID</h3>
                        <p>23456885</p>
                    </div>
                    
                    <div>
                        <h3 className="mb-4">Student Card</h3>
                        <Image src={books[0].coverUrl} alt={books[0].title} width={500} height={70} />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Borrowed books</h1>
                    <BookList bookList={books} />
                </div>
            </div>
        </>
    );
};

export default Page;