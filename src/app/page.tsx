import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

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
      <ThemeToggle/>
    </div>
  );
}
