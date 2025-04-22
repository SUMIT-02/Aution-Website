"use server"

import { database } from "@/db/database";
import { items, sessions } from "@/db/schema";
import { auth } from "@/auth";
import { redirect } from "next/navigation";


export async function createItemActions(formData:FormData) {
        const session= await auth();
        if (!session){
          throw new Error("Unauthorized")
        }
        const user=session.user;
        if (!user || !user.id){
          throw new Error("Unauthorized")
        }

        await database.insert(items).values({
          name:formData.get("name") as string,
          startingPrice:Number(formData.get("startingPrice")),
          userId:user.id,
        })
        // revalidatePath("/");
        redirect("/");
    
}