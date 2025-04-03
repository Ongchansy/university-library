import React from 'react'
import Image from "next/image";
import BookCover from "@/components/BookCover";
import { BookData } from '@/type';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import BorrowButton from './BorrowButton';

const BookOverview = async({
    id,
    title,
    author,
    genre,
    rating,
    totalCopies,
    availableCopies,
    description,
    coverUrl,
    coverColor,
}
:BookData) => {
        const session = await auth();
    
        // If no session exists, redirect to the sign-in page
        if (!session) redirect(`/sign-in`);
    
        // Use type assertion to ensure session.user is not undefined
        const sessionToken = session as { user: { id: string; name: string } };
    return (
        <section className={`book-overview`}>
            <div className={`flex flex-1 flex-col gap-5`}>
                <h1 className={`title`}>{title}</h1>
                <div className={`book-info`}>
                    <p>
                        By <span className={`font-semibold text-light-200`}>{author}</span>
                    </p>
                    <p>
                        Category <span className={`font-semibold text-light-200`}>{genre}</span>
                    </p>

                    <div className={`flex flex-row gap-1`}>
                        <Image src={`/icons/star.svg`} alt={`star`} width={22} height={22} />
                        <p>{rating}</p>
                    </div>

                    <div className={`book-copies`}>
                        <p>
                            Total Books: <span className={`font-semibold text-light-200`}>{totalCopies}</span>
                        </p>
                        <p>
                            Available Books: <span className={`font-semibold text-light-200`}>{availableCopies}</span>
                        </p>
                    </div>

                    <p className={`book-description`}>{description}</p>
                    {
                        id && <BorrowButton bookId={id} userId={sessionToken.user.id} />
                    }
                </div>
            </div>

            <div className={`relative flex flex-1 justify-center `}>
                <div className={`relative `}>
                    <BookCover
                        variant="wide"
                        className="z-10"
                        coverColor={coverColor}
                        coverImage={coverUrl}
                    />

                    <div className={`absolute left-16 top-10 rotate-12 opacity-40`}>
                        <BookCover
                            variant="wide"
                            coverColor={coverColor}
                            coverImage={coverUrl}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BookOverview
