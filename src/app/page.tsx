import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <SignedOut>
        <SignInButton mode="modal">
            <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>


      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
