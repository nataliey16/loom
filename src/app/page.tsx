"use client";
import React, { useCallback, useState } from "react";
import Header from "./components/header";
import About from "./components/about";
import AImatching from "./components/aimatching";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen ">
      {/* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
      <main className="flex flex-col p-5">
        <Header />
        <About />
        <AImatching />
        <Testimonial />
      </main>
    </div>
  );
}
