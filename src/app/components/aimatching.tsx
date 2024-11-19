"use client";

import React from "react";

const SECTION_STYLES =
  "mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] poppins";
const HEADER_STYLES = "flex flex-col items-center justify-center";
const TITLE_STYLES =
  "mb-10 mt-36 px-3 text-3xl font-bold !leading-[1.5] sm:text-7xl text-dark-green ";
const SUBTITLE_STYLES =
  " px-4 font-medium !leading-[1.5] text-2xl text-dark-green ";

const BUTTON_STYLES =
  " bg-dark-orange text-white rounded-full p-3 m-5 poppins ";

const Aimatching = () => {
  return (
    <section className={SECTION_STYLES}>
      <div className={HEADER_STYLES}>
        <div>
          <h1 className={TITLE_STYLES}>
            AI Matching: Connecting You with the Right People and Experiences.
          </h1>
        </div>
        <div>
          <p className={SUBTITLE_STYLES}>
            Navigating social opportunities just got easier with our
            chatbot-powered AI matching system. Think of it as your personal
            connection concierge—here to guide you every step of the way.
          </p>
        </div>
        <div>
          <p className={SUBTITLE_STYLES}>
            Interactive Discovery: Share your interests, preferences, and
            comfort level through a friendly chat with our intuitive chatbot.
          </p>
        </div>
        <div className="mt-14">
          <h3 className="text-dark-green text-1xl ">
            Join a Community That Feels Right for You.
          </h3>
          <button className={BUTTON_STYLES}>Get Started Today</button>
        </div>
      </div>
    </section>
  );
};

export default Aimatching;
