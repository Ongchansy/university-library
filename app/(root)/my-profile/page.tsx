import React from "react";
import BookList from "@/components/BookList";
import { sampleBooks } from "@/constants";
import Image from "next/image";

const Page = () => {
    return (
        <>
            
            <div className="grid grid-cols-2 gap-10 ">
                <div className="flex flex-col gap-10 bg-slate-800 p-14">
                    <div className="flex items-center gap-10">
                        <Image src={sampleBooks[0].cover} alt={sampleBooks[0].title} width={100} height={100} />
                        <div>
                            <h1 className="text-2xl font-bold">{sampleBooks[0].title}</h1>
                            <p>{sampleBooks[0].author}</p>
                            <p>{sampleBooks[0].genre}</p>
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
                        <Image src={sampleBooks[0].cover} alt={sampleBooks[0].title} width={500} height={70} />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl font-bold">Borrowed books</h1>
                    <BookList books={sampleBooks} />
                </div>
            </div>
        </>
    );
};

export default Page;