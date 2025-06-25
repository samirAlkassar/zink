"use client";

import LoadingBar from "react-top-loading-bar";
import { CiBasketball } from "react-icons/ci";
import { ThemeButton } from "../../components/ThemeButton";
import { Headings } from "../../components/ui/Headings";
import { SubHeadings } from "../../components/ui/SubHeadings";
import { Buttons } from "../../components/ui/Buttons";
import { FaGoogle } from "react-icons/fa";

import { useState, useEffect, useRef } from "react";
import { auth } from "../../lib/firebase/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import Link from "next/link";


const SignUpPage = () => {
    const router = useRouter(); // ✅
    const loadingBar = useRef<any>(null); // ← loading bar reference
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isSigningUp, setIsSigningUp] = useState(false);
    const [error, setError] = useState("");

      // Start bar when signing in
      useEffect(() => {
        if (isSigningUp) {
          loadingBar.current?.continuousStart();
        }
      }, [isSigningUp]);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            loadingBar.current?.complete(); // <- complete in case it was started
            return;
        }

        if (!isSigningUp) {
            setIsSigningUp(true);
            loadingBar.current?.continuousStart();

            try {
            await createUserWithEmailAndPassword(auth, email, password);
            loadingBar.current?.complete();
            router.push("/app");
            } catch (error: any) {
            setError(error.message);
            loadingBar.current?.complete();
            setIsSigningUp(false);
            }
        }
    };

    const handleGoogleLogin = async () => {
        if (!isSigningUp) {
            setIsSigningUp(true);
            loadingBar.current?.continuousStart();

            try {
                const provider = new GoogleAuthProvider();
                await signInWithPopup(auth, provider);
                loadingBar.current?.complete();
                router.push("/app");
            } catch (error: any) {
            setError(error.message);
            loadingBar.current?.complete();
            setIsSigningUp(false);
            }
        }
    };



    return (
        <>
        <LoadingBar color="#f11946" height={3} ref={loadingBar} />
        {/* {loading && <p className="text-blue-500">Loading...</p>} */}
        {error && <p className="text-red-500">{error}</p>}
        {/* {isSigningUp && (<p className="text-blue-500">Signing in...</p>)} */}
        <div>
            <ThemeButton className="absolute right-4 top-4" />
        </div>

        <section className="flex flex-col items-center justify-center h-screen bg-background">

            <Link className="flex items-center gap-2 justify-center cursor-pointer mb-6" href="/">
                    <CiBasketball  className="text-4xl" />
                    <h1 className="font-semibold text-3xl">ZenK</h1>
            </Link>

            <div className="bg-background primary-shadow rounded-lg p-8 w-lg flex flex-col items-center">
                <Headings variant="h3" className="text-center mb-1">Create Account</Headings>
                <SubHeadings variant="p2" className="text-center mb-8">Start your mindfull productivity journey today.</SubHeadings>

                <SignUpForm email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} onSubmit={onSubmit}/>
                
                <div className="flex items-center justify-center gap-2 my-6 w-full">
                    <span className="bg-secondary w-full h-0.5" /> <p className="w-full text-sm text-primary/60">OR CONTINUE WITH</p> <span className="bg-secondary w-full h-0.5"/>
                </div>

                <Buttons variant={"secondary"} size="medium" className="w-full" onClick={handleGoogleLogin}>
                    <span className="flex items-center justify-center gap-1">
                        <FaGoogle className="text-xl"/> <span className="ml-2">Sign up with Goggle</span>
                    </span>           
                </Buttons>

                <div className="flex gap-2 items-center justify-center mt-6">
                    <p className="text-primary/70">Already have an account?</p>
                    <a href="/login">Login</a>
                </div>
            </div>
        </section>
        </>
    )
}

type SignUpFormProps = {
    email: string;
    setEmail: (email: string) => void;
    password: string;   
    setPassword: (password: string) => void;
    confirmPassword: string;
    setConfirmPassword: (confirmPassword: string) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


const SignUpForm = ({email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, onSubmit}:SignUpFormProps) => {
    return (
        <form onSubmit={onSubmit} className="w-full flex flex-col gap-6">
            <div className="flex flex-col">
                <label htmlFor="Email" className="mb-1 text-primary/80">Email</label>
                <input type="email" name="Email" placeholder="username@gmail.com" className="border border-secondary/50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" required
                value={email} onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="Email" className="mb-1 text-primary/80">Password</label>
                <input type="password" name="Password" placeholder="Password" className="border border-secondary/50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" required 
                value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="ConfirmPassword" className="mb-1 text-primary/80">Confirm Password</label>
                <input type="password" name="ConfirmPassword" placeholder="Confirm Password" className="border border-secondary/50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary" required 
                value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
            </div>
            <Buttons type="submit" variant="primary" size="medium">Create Account</Buttons>
        </form>

    )
}

export default SignUpPage;