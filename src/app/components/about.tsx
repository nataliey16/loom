import React from "react";

const SECTION_STYLES =
  "mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] ";
const HEADER_STYLES = "flex flex-col items-center justify-center";
const TITLE_STYLES =
  "mb-10 mt-52 px-3 text-3xl font-bold !leading-[1.5] sm:text-7xl poppins text-white ";
const SUBTITLE_STYLES =
  " px-4 text-small font-normal !leading-[1.5] sm:text-xl poppins dark-green ";

const About = () => {
  return (
    <section className={SECTION_STYLES}>
      <div className={HEADER_STYLES}>
        <div>
          <h1 className={TITLE_STYLES}>About</h1>
        </div>
        <div>
          <p className={SUBTITLE_STYLES}>
            At [App Name], we understand that traditional networking can feel
            overwhelming. That’s why we’ve created a space where you can connect
            with like-minded individuals at your own pace. From small group
            events to curated interest-based activities, we make it easy and
            comfortable for you to grow socially and personally.
          </p>
        </div>
        <button></button>
      </div>
    </section>
  );
};

export default About;
