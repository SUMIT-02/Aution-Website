// import { signIn } from "@/auth"
// import { Button } from "./ui/button"

// export default function SignIn() {
//   return (
//     <form
//       action={async () => {
//         "use server"
//         await signIn("google")
//       }}
//     >
//       <Button type="submit">Signin with Google </Button>
//     </form>
//   )
// }

import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit">Signin with Google</Button>
    </form>
  );
}
