// app/not-found.tsx
"use client";

import { Buttons } from "@/components/ui/Buttons";
import { SubHeadings } from "@/components/ui/SubHeadings";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.warn("404 - Page not found");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-primary bg-background px-4 text-center">
      <div className="text-6xl font-bold mb-2">404</div>
      <div className="text-2xl mb-4">Page Not Found</div>
      <SubHeadings className="text-gray-400 mb-6 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </SubHeadings>
      <Buttons variant="primary" size="medium" href="/">
        Return to Home
      </Buttons>
    </div>
  );
}

export default NotFound;