import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar"


const Header = ({sessionToken}: any) => {
    return (
        <header className="my-10 flex justify-between gap-5">
            <Link href="/">
                <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
            </Link>


            {
                sessionToken ? (
                    <div className="flex gap-5 ">
                        <Link href={`/my-profile`}>
                            <Avatar>
                                <AvatarFallback className="text-light-200 uppercase bg-teal-600">{sessionToken.user.name.slice(0,2)}</AvatarFallback>
                            </Avatar>
                        </Link>
                    </div>
                ) : (
                    <Link href="/sign-in">
                        <a>Sign In</a>
                    </Link>
                )
            }
            
        </header>
    );
};

export default Header;