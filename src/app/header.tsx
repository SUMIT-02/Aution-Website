import { auth } from "@/auth";
import { SignIn } from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import Link from "next/link";
import Image from "next/image";
export async function Header() {
  const session = await auth();

  return (
    <div className="bg-gray-200 py-4">
      <div className="container flex justify-between">
        <div className="flex items-center gap-12 ">
          <Link
            href="/"
            className="font-bold hover:underline flex items-center gap-1 "
          >
            <Image src="/logo.png" width="80" height="80" alt="Logo" />
            Bigbuddy.com
          </Link>
          <div className="flex items-center gap-8">
            <Link
              href="/items/create"
              className="font-bold hover:underline flex items-center gap-1"
            >
              All Auction
            </Link>

            <Link
              href="/items/create"
              className="font-bold hover:underline flex items-center gap-1"
            >
              Create Auction
            </Link>

            <Link
              href="/auctions"
              className="font-bold hover:underline flex items-center gap-1"
            >
              My Auction
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>{session?.user?.name}</div>
          <div>{session ? <SignOut /> : <SignIn />}</div>
        </div>
      </div>
    </div>
  );
}
