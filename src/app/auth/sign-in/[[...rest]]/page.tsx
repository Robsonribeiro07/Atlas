import { SignIn } from "@clerk/nextjs";

function SignInPage() {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
        <SignIn forceRedirectUrl='/dashboard' />
        </div>
    )
}
export default SignInPage;