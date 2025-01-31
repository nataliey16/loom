"use client";

import React from "react";

const SECTION_STYLES =
  "mb-52 max-w-[70rem] text-center sm:mb-0 scroll-mt-[100rem] poppins";
const HEADER_STYLES = "flex flex-col items-center justify-center";
const TITLE_STYLES =
  "mb-10 mt-36 px-3 text-3xl font-bold !leading-[1.5] sm:text-7xl text-dark-green ";
const SUBTITLE_STYLES =
  "my-4 px-4 font-medium !leading-[1.5] text-2xl  text-dark-green ";

const Aimatching = () => {
  return (
    <section className={SECTION_STYLES}>
      <div className={HEADER_STYLES}>
        <div>
          <h1 className={TITLE_STYLES}>
            AI Matching: Connecting You with the Right People and Experiences.
          </h1>
        </div>
        {/* <div className="bg-blue right-[11rem] h-[31.25rem] w-[31.25rem] absolute bottom-0 -z-10 rounded-full blur-[10rem] dark:bg-[#946263]"></div> */}
        <div>
          <p className={SUBTITLE_STYLES}>
            Our platform doesn’t just connect people—it fosters growth. With
            AI-powered recommendations, guided social events, and reflective
            growth spaces, you’ll have everything you need to connect, engage,
            and grow at your own pace.
          </p>
        </div>
        <div>
          <ul>
            <li className={SUBTITLE_STYLES}>
              <strong>Interactive Discovery:</strong> Share your interests,
              preferences, and comfort level through a friendly chat with our
              intuitive chatbot.
            </li>
            <li className={SUBTITLE_STYLES}>
              <strong>Tailored Suggestions:</strong> The chatbot uses AI to
              recommend events, activities, and participants that align with
              your unique social style.
            </li>
            <li className={SUBTITLE_STYLES}>
              <strong>Real-Time Guidance:</strong> Not sure what to do next?
              Your chatbot is always available to answer questions, suggest
              icebreakers, and help you ease into new connections.
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#C3CFFA] absolute bottom-0 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#EDF3DD] absolute bottom-10 -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#F7BC7D] absolute bottom-20 -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
    </section>
  );
};

export default Aimatching;
