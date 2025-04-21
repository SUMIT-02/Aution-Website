import { database } from "@/db/database";
import { bids as bidsSchema, items} from "@/db/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { revalidatePath } from "next/cache";
import {SignIn} from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import { auth } from "@/auth";


export default async function HomePage() {
  const session =await auth();

  const allItems=await database.query.items.findMany();
  if (!session) return null;

  const user= session.user
  if(!user) return null;

  return <main className="container mx-auto py-12 space-y-8">
    {/* {session ? <SignOut/> :<SignIn/>}

    {session?.user?.name}       //managed in headers
     */}
     <h1 className="text-4xl font-bold">Post an Item to Sell</h1>
    <form 
    className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
    action={async(formData:FormData)=>{
      "use server";
      //const bid=formData.get("bid") as string;
      await database.insert(items).values({
        name:formData.get("name") as string,
        userId:session?.user?.id!
      })
      revalidatePath("/");
    }}>
      <Input className="max-w-md" name="name" placeholder="Name Your Items"/>
      <Button type="submit">Post Item </Button>
    </form>

    <h2 className="text-2xl font-bold">Items For Sale</h2>
    <div className="grid grid-cols-4 gap-8">
    {allItems.map((item)=>(
      <div key={item.id} className="border p-8 rounded-xl">{item.name}</div>

    //   <Input name="name" placeholder="Name Your Items"/>
    //   <Button type="submit">Post Item </Button>
    // </form>
    // {allItems.map((item)=>(
    //   <div key={item.id}>{item.name}</div>

    ))}
    </div>
  </main>
 
}
