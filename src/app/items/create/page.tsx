"use client";

import {
  createItemAction,
  createUploadUrlAction,
} from "@/app/items/create/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { error } from "console";

export default function CreatePage() {
  return (
    <main className="container mx-auto py-12 space-y-8">
      <h1 className="text-4xl font-bold">Post an Item</h1>
      <form
        className="flex flex-col border p-8 rounded-xl space-y-4 max-w-lg"
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget as HTMLFormElement;
          const formData = new FormData(form);
          const file = formData.get("file") as File;

          const uploadUrl = await createUploadUrlAction(file.name, file.type);
          console.log(uploadUrl);

          fetch(uploadUrl, {
            method: "PUT",
            body: file,
          }).catch((error) => console.log(error));
          console.log();

          const name = formData.get("name") as string;
          const startingPrice = parseInt(
            formData.get("startingPrice") as string
          );
          const startingPriceInCents = Math.floor(startingPrice * 100);

          await createItemAction({
            name,
            startingPrice: startingPriceInCents,
            fileName: file.name,
          });
        }}
      >
        <Input
          required
          className="max-w-md"
          name="name"
          placeholder="Name Your Items"
        />
        <Input
          required
          className="max-w-md"
          name="startingPrice"
          type="number"
          placeholder="Name Your Items"
        />
        <Input type="file" name="file"></Input>
        <Button className="self end" type="submit">
          Post Item{" "}
        </Button>
      </form>
    </main>
  );
}
