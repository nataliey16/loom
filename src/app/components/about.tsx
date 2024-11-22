"use client";
import React from "react";
import Image from "next/image";

const SECTION_STYLES =
  "mb-28 max-w-[70rem] text-center sm:mb-0 scroll-mt-[100rem] poppins";
const HEADER_STYLES = "grid grid-col items-center justify-center";
const TITLE_STYLES =
  "mb-10 mt-52 px-3 text-3xl font-bold !leading-[1.5] sm:text-7xl text-dark-green";
const SUBTITLE_STYLES =
  "px-4 text-small font-normal !leading-[1.5] sm:text-xl dark-green";
const GRID_CONTAINER =
  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-20";
const GRID_ITEMS =
  "text-start p-4 border min-h-64 rounded-md bg-light-green flex flex-col";
const IMG_STYLES = "rounded-md w-full h-auto";
const BUTTON_STYLES =
  "bg-light-purple text-white rounded-md py-2 px-6 mt-4 self-center w-full";

const IMG_WIDTH = 500;
const IMG_HEIGHT = 300;

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => (
  <div className={GRID_ITEMS}>
    <Image
      className={IMG_STYLES}
      src={imageSrc}
      width={IMG_WIDTH}
      height={IMG_HEIGHT}
      alt={title}
    />
    <div className="flex-1">
      <h1 className="font-bold mt-4">{title}</h1>
      <p>{description}</p>
    </div>
    <button className={BUTTON_STYLES}>Learn more</button>
  </div>
);

const About = () => {
  const activities = [
    {
      imageSrc: "/images/cooking.jpg",
      title: "Cooking Class",
      description: "Introverts who love to cook.",
    },
    {
      imageSrc: "/images/flowers.jpg",
      title: "Chat & Chill",
      description: "Introverts who love to chill.",
    },
    {
      imageSrc: "/images/art.jpg",
      title: "Art Club",
      description: "Introverts who love to art.",
    },
    {
      imageSrc: "/images/beach.png",
      title: "Beach Day",
      description: "Introverts who love the beach.",
    },
    {
      imageSrc: "/images/books.jpg",
      title: "Book Club",
      description: "For those who love to read.",
    },
    {
      imageSrc: "/images/dog.jpg",
      title: "Dog Cuddles",
      description: "Introverts who love dogs.",
    },
  ];

  return (
    <section id="about" className={SECTION_STYLES}>
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
          {activities.map((activity, idx) => (
            <Card
              key={idx}
              imageSrc={activity.imageSrc}
              title={activity.title}
              description={activity.description}
            />
          ))}
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
