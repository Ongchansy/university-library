import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Logout from "./Logout";

interface User {
    name: string;
}

interface SessionToken {
    user: User;
}

interface HeaderProps {
    sessionToken?: SessionToken | null;
}

const Header: React.FC<HeaderProps> = ({ sessionToken }) => {
    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
            </Link>

            <div className="flex items-center gap-8 text-light-100">
                <Link href="/">Home</Link>
                <Link className="text-light-200" href="/explore">
                    Explore
                </Link>
                {sessionToken ? (
                    <div className="flex gap-8 items-center">
                        <div>
                            <Link className="flex items-center gap-1" href={`/my-profile`}>
                                <Avatar>
                                    <AvatarFallback className="text-light-200 uppercase bg-teal-600">
                                        {sessionToken.user.name?.slice(0, 2)}
                                    </AvatarFallback>
                                </Avatar>
                                <p className="capitalize">{sessionToken.user.name}</p>
                            </Link>
                        </div>

                        <Logout />
                    </div>
                ) : (
                    <Link href="/sign-in">Sign In</Link>
                )}
            </div>
        </header>
    );
};

export default Header;
