import React from "react";

const SECTION_STYLES =
  "mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem] poppins";
const HEADER_STYLES = "flex flex-col items-center justify-center";
const TITLE_STYLES =
  "m-20 text-3xl font-bold !leading-[1.5] sm:text-7xl text-dark-green ";
const SUBTITLE_STYLES =
  " px-4 font-medium !leading-[1.5] text-2xl text-dark-green";
const BUTTON_STYLES = "bg-dark-orange p-4 rounded-xl text-white m-2 flex";

type CardProps = {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
};

const discussionContent = [
  {
    id: "1",
    title: "Feeling Like I Have to Perform",
    body: "For me, the hardest part is feeling like I’m constantly expected to be someone I’m not in social settings. People assume I’m shy or uninterested, but really, I just need time to process before I speak. It’s exhausting trying to meet those expectations.",
    author: "AlwaysOverthinking",
    date: "03/10/2024 8:34 pm",
  },
  {
    id: "2",
    title: "Networking Feels Like a Nightmare",
    body: "I dread networking events. Walking into a room full of strangers and having to make small talk feels like running a mental marathon. I never know what to say, and I’m terrified of coming across as awkward.",
    author: "QuietlyComfortable",
    date: "01/10/2024 2:00 am",
  },
  {
    id: "3",
    title: "Social Hangovers Are Real",
    body: "After a long day of socializing, I feel like I need two days to recover. Does anyone else experience this? I feel bad for canceling plans sometimes, but I just can’t handle back-to-back interactions.",
    author: "IntrovertOptimist",
    date: "029/09/2024 10:14 pm",
  },
];
const DiscussionCard = (props: CardProps) => {
  const { id, title, body, author, date } = props;
  return (
    <div className="border-8 border-light-purple bg-white w-full h-100 p-10 my-4 rounded-md text-[#746557]">
      <div className="py-2">
        <h1 className="text-3xl p-4 font-bold text-center">{title}</h1>
        <p className="text-1xl p-4 text-start">{body}</p>
        <p className="text-sm px-4 py-1 text-start text-gray">{author}</p>
        <p className="text-sm px-4  py-1 text-start text-gray">{date}</p>
      </div>
      <button className={`${BUTTON_STYLES} justify-start`}>
        View Discussion
      </button>
    </div>
  );
};

const Discussion = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mb-20">
      <section className={SECTION_STYLES}>
        <div className={HEADER_STYLES}>
          <h1 className={TITLE_STYLES}>Introverts Anonymous </h1>
        </div>
        <div className="flex justify-end">
          <button className={`${BUTTON_STYLES}`}>Create Post</button>
        </div>
        <div>
          {discussionContent.map((discussion) => (
            <DiscussionCard
              key={discussion.id}
              id={discussion.id}
              title={discussion.title}
              body={discussion.body}
              author={discussion.author}
              date={discussion.date}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discussion;
