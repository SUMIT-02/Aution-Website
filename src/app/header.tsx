import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in"
import { SignOut } from "@/components/sign-out"
import  Link  from "next/link";
import Image from "next/image"
export async function Header(){
    const session = await auth(); 

    return (
    <div className="bg-gray-200 py-4">
        <div className="container flex justify-between" >
            {/* <div className="flex items-center gap-2"> */}
                <Link href="/" className="hover:underline flex items-center gap-1">
                <Image src="/logo.png" width="50" height="50" alt="Logo"/>
                Bigbuddy.com
                </Link>
            <div className="flex items-center gap-4">
            <div>{session?.user?.name}</div>
            <div>{session?<SignOut/>:<SignIn/>}</div>
            </div>
        </div>
    </div>
    ) 
}