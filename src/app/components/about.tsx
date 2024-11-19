"use client";
import React from "react";
import Image from "next/image";

const SECTION_STYLES =
  "mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] poppins";
const HEADER_STYLES = "GRID GRID-col items-center justify-center";
const TITLE_STYLES =
  "mb-10 mt-52 px-3 text-3xl font-bold !leading-[1.5] sm:text-7xl  text-dark-green ";
const SUBTITLE_STYLES =
  " px-4 text-small font-normal !leading-[1.5] sm:text-xl dark-green ";
const CONTENT_CONTAINER_STYLES = "p-2 ";
const CONTENT_STYLES = "text-md";
const BUTTON_STYLES =
  " bg-light-purple text-white rounded-md py-2 px-6 w-full  ";

const IMG_STYLES = "rounded-md";

const GRID_CONTAINER = "grid grid-cols-3 grid-rows-2 gap-4 my-20";
const GRID_ITEMS = "text-start p-4 border min-h-64 rounded-md bg-light-green";

const COOKING_IMG = "/images/cooking.jpg";
const BOOKCLUB_IMG = "/images/book-club.jpg";
const BOOKS_IMG = "/images/books.jpg";
const ART_IMG = "/images/art.jpg";

const IMG_WIDTH = 500;
const IMG_HEIGHT = 300;
const About = () => {
  return (
    <section className={SECTION_STYLES}>
      <div className={HEADER_STYLES}>
        <div>
          <h1 className={TITLE_STYLES}>
            Connecting in a Way That Feels Right for You.
          </h1>
        </div>
        <div>
          <p className={SUBTITLE_STYLES}>
            At Loom, we believe in creating connections that are meaningful,
            authentic, and tailored to your pace. We understand that introverts
            often find traditional social settings overwhelming, so we’ve built
            a platform specifically designed to make socializing feel natural
            and low-pressure. Whether you’re looking to engage in small group
            activities, explore shared interests, or simply observe before
            jumping in, we’ve got you covered.
          </p>
        </div>
        <div className={GRID_CONTAINER}>
          <div className={`${GRID_ITEMS}`}>
            <Image
              className={IMG_STYLES}
              src={COOKING_IMG}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt="Image of cooking"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..." // Add a small Data URL here
            />
            <div className={CONTENT_CONTAINER_STYLES}>
              <h1 className="font-bold">Cooking Class</h1>
              <p>Introverts who love to cook.</p>
            </div>
            <button className={BUTTON_STYLES}>Join</button>
          </div>
          <div className={`${GRID_ITEMS}`}>
            <Image
              className={IMG_STYLES}
              src={BOOKS_IMG}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt="Image of a book club"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..." // Add a small Data URL here
            />
            <div className={CONTENT_CONTAINER_STYLES}>
              <h1 className="font-bold">Book Club</h1>
              <p>Introverts who love to read.</p>
            </div>
            <button className={BUTTON_STYLES}>Join</button>
          </div>
          <div className={`${GRID_ITEMS}`}>
            <Image
              className={IMG_STYLES}
              src={ART_IMG}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt="Image of art pencils"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..." // Add a small Data URL here
            />
            <div className={CONTENT_CONTAINER_STYLES}>
              <h1 className="font-bold">Art Club</h1>
              <p>Introverts who love to art</p>
            </div>
            <button className={BUTTON_STYLES}>Join</button>
          </div>
          <div className={`${GRID_ITEMS}`}>
            <Image
              className={IMG_STYLES}
              src={ART_IMG}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt="Image of a book "
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..." // Add a small Data URL here
            />
            <div className={CONTENT_CONTAINER_STYLES}>
              <h1 className="font-bold">Art Club</h1>
              <p>Introverts who love to do art.</p>
            </div>
            <button className={BUTTON_STYLES}>Join</button>
          </div>
          <div className={`${GRID_ITEMS}`}>
            <Image
              className={IMG_STYLES}
              src={ART_IMG}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt="Image of drawing pencils"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..." // Add a small Data URL here
            />
            <div className={CONTENT_CONTAINER_STYLES}>
              <h1 className="font-bold">Book Club</h1>
              <p>For those who love to read</p>
            </div>
            <button className={BUTTON_STYLES}>Join</button>
          </div>
          <div className={`${GRID_ITEMS}`}>
            <Image
              className={IMG_STYLES}
              src={BOOKS_IMG}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt="Image of a book club"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,..." // Add a small Data URL here
            />
            <div className={CONTENT_CONTAINER_STYLES}>
              <h1 className="font-bold">Book Club</h1>
              <p>For those who love to read</p>
            </div>
            <button className={BUTTON_STYLES}>Join</button>
          </div>
        </div>
        <div>
          <p className={SUBTITLE_STYLES}>
            Our platform doesn’t just connect people—it fosters growth. With
            AI-powered recommendations, guided social events, and reflective
            growth spaces, you’ll have everything you need to connect, engage,
            and grow at your own pace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
