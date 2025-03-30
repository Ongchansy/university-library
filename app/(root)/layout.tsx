import React, { ReactNode } from 'react'
import Header from "@/components/Header";
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: ReactNode }) => {
    const session = await auth();

    // If no session exists, redirect to the sign-in page
    if (!session) redirect(`/sign-in`);

    // Use type assertion to ensure session.user is not undefined
    const sessionToken = session as { user: { id: string; name: string } };

    return (
        <main className="root-container">
            <div className={`mx-auto max-w-7xl`}>
                <Header sessionToken={sessionToken} />

                <div className={`mt-20 pb-20`}>
                    {children}
                </div>
            </div>
        </main>
    );
}

export default Layout;
