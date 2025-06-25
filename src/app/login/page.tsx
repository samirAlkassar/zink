"use client";

import LoadingBar from "react-top-loading-bar";
import { CiBasketball } from "react-icons/ci";
import { ThemeButton } from "../../components/ThemeButton";
import { Headings } from "../../components/ui/Headings";
import { SubHeadings } from "../../components/ui/SubHeadings";
import { Buttons } from "../../components/ui/Buttons";
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

import { doSignInWithEmailAndPassword, doSignInWithGoggle } from "@/lib/firebase/auth";
import { useAuth } from "@/context/authContext";


const LoginPage = () => {
  const loadingBar = useRef<any>(null); // ← loading bar reference


  const { loading, isSigningIn, setIsSigningIn } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState("");

  // Start bar when signing in
  useEffect(() => {
    if (isSigningIn) {
      loadingBar.current?.continuousStart();
      loadingBar.current?.complete(); 
      // router.push("/app");
    }
  }, [isSigningIn]);


  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSigningIn) return; // Prevent double submission
    setIsSigningIn(true);
    localStorage.setItem("isLoggedIn","true")
    setError("");

    try {
      loadingBar.current?.continuousStart();
      await doSignInWithEmailAndPassword(email, password);
      loadingBar.current?.complete();
      router.push("/app/projects");
    } catch (error: any) {
      setError(error.message);
      loadingBar.current?.staticStart();
      loadingBar.current?.complete();
      setIsSigningIn(false);
      localStorage.setItem("isLoggedIn","false")
    }
  };

  const onGoogleSignIn = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);
    localStorage.setItem("isLoggedIn","true")
    setError("");

    try {
      loadingBar.current?.continuousStart();
      await doSignInWithGoggle();
      loadingBar.current?.complete();
      router.push("/app/projects");
    } catch (error: any) {
      setError(error.message);
      loadingBar.current?.staticStart();
      loadingBar.current?.complete();
      setIsSigningIn(false);
      localStorage.setItem("isLoggedIn","true")
    }
  };

    

  return (
    <>
      <LoadingBar color="#f11946" height={3} ref={loadingBar} />
      {/* {loading && <p className="text-blue-500">Loading...</p>} */}
      {/* {error && <p className="text-red-500">{error}</p>} */}
      {isSigningIn && (
        <Alert className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 max-w-lg w-[90%] sm:w-1/2" 
          icon={<CheckIcon fontSize="inherit" />} severity="success">
          Here is a gentle confirmation that your action was successful.</Alert>
      )}
      {error && !isSigningIn && (
        <Alert
          className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 max-w-lg w-[90%] sm:w-1/2"
          severity="warning">
          {error}
        </Alert>
      )}


      <div>
        <ThemeButton className="absolute right-4 top-4" />
      </div>

      <section className="flex flex-col items-center justify-center h-screen bg-background">
        <a className="flex items-center gap-2 justify-center cursor-pointer mb-6" href="/">
          <CiBasketball className="text-4xl" />
          <h1 className="font-semibold text-3xl">ZenK</h1>
        </a>

        <div className="bg-background primary-shadow rounded-lg p-8 w-lg flex flex-col items-center">
          <Headings variant="h3" className="text-center mb-1">Login to your Account</Headings>
          <SubHeadings variant="p2" className="text-center mb-8">Start your mindfull productivity journey today.</SubHeadings>

          <LoginForm
            email={email}
            password={password}
            onSubmit={onSubmit}
            setEmail={setEmail}
            setPassword={setPassword}
            isSigningIn={isSigningIn}
          />

          <div className="flex items-center justify-center gap-2 my-6 w-full">
            <span className="bg-secondary w-full h-0.5" />
            <p className="w-full text-sm text-primary/60">OR CONTINUE WITH</p>
            <span className="bg-secondary w-full h-0.5" />
          </div>

          <Buttons
            variant="secondary"
            size="medium"
            className="w-full"
            onClick={onGoogleSignIn}
          >
            <span className="flex items-center justify-center gap-1">
              <FaGoogle className="text-xl" />
              <span className="ml-2">Login with Google</span>
            </span>
          </Buttons>

          <div className="flex gap-2 items-center justify-center mt-6">
            <p className="text-primary/70">Don't have an account?</p>
            <a href="/signUp">Sign Up</a>
          </div>
        </div>
      </section>
    </>
  );
};

interface LoginFormProps {
  email: string;
  password: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  isSigningIn: boolean
}

const LoginForm = ({email, password, onSubmit, setEmail, setPassword, isSigningIn}: LoginFormProps) => {
  return (
    <form className="w-full flex flex-col gap-6" onSubmit={onSubmit}>
      <div className="flex flex-col">
        <label htmlFor="Email" className="mb-1 text-primary/80">Email</label>
        <input
          type="email"
          name="Email"
          placeholder="username@gmail.com"
          className="border border-secondary/50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Password" className="mb-1 text-primary/80">Password</label>
        <input
          type="password"
          name="Password"
          placeholder="Password"
          className="border border-secondary/50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Buttons type="submit" variant="primary" size="medium" disabled={isSigningIn}>
        {isSigningIn ? "Logging in..." : "Login"}
      </Buttons>

    </form>
  );
};

export default LoginPage;
