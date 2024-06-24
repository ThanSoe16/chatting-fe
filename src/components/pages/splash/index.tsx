"use client";
import React, { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";

const Splash: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      router.replace("/dashboard");
    }, 2000);
    return () => clearTimeout(redirectTimeout);
  }, [router]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <h1 className="z-0 text-5xl font-bold">
        Chatting<span className="text-primary"> Application</span>
      </h1>
    </div>
  );
};

export default Splash;
