import React from "react";

const SECTION_STYLES =
  " max-w-[70rem] text-center sm:mb-0 scroll-mt-[100rem] poppins";
const HEADER_STYLES = "flex flex-col items-center justify-center";
const TITLE_STYLES =
  "mb-10 mt-36 px-3 text-3xl font-bold !leading-[1.5] sm:text-7xl text-dark-green ";

type TestimonialProps = {
  id: string;
  body: string;
  author?: string;
};

const testimonialContent = [
  {
    id: "1",
    body: "Most social apps are overwhelming, but this platform gets it. The AI matching paired me with a small art workshop, and I loved it! We focused on the activity, so there was no pressure to talk all the time. I finally feel like I’ve found a way to connect with people who genuinely understand me.",
    author: "- Anonymous",
  },
  {
    id: "2",
    body: "I’ve always avoided large social events because I overthink everything I say. This platform’s focus on small, shared-interest groups made all the difference. The icebreaker prompts in the group chat were super helpful, and now I feel more confident meeting new people.",
    author: "- Anonymous",
  },
  {
    id: "3",
    body: "For the first time, I feel like I belong. The platform’s structure is perfect for introverts—small groups, shared interests, and no pressure. I’ve attended two casual coffee meetups, and I can’t believe how easy it was to connect. This is the community I’ve been searching for.",
    author: "- Anonymous",
  },
];

const TestimonialCard = (props: TestimonialProps) => {
  const { id, body, author } = props;
  return (
    <div className=" my-4 bg-light-purple p-10  rounded-lg">
      <p>{body}</p>
      <p className="pt-4">{author}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className={SECTION_STYLES}>
      <div className={HEADER_STYLES}>
        <div>
          <h1 className={TITLE_STYLES}>Stories From Our Community</h1>
        </div>
        <div className="flex flex-row gap-4 py-10 italic">
          {testimonialContent.map((testimonial) => (
            <TestimonialCard
              id={testimonial.id}
              body={testimonial.body}
              author={testimonial.author}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
