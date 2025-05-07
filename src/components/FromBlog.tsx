import Card from "./Card";
import Tag from "./Tag";

type BlogType = {
  date: string;
  title: string;
  snippet: string;
};

const blogList: BlogType[] = [
  {
    date: "Wed, 09 Apr 2025",
    title: "Monthly News – March 2025",
    snippet:
      "Hi everyone, Before we start with the news, I’d like to thank all the people who donate, sponsor and contribute in various ways to our project. Many thanks to all of you! Note: The features which are previewed in this post are planned for upcoming releases. They are not available right now. Searching for files […]",
  },
  {
    date: "Sat, 01 Mar 2025",
    title: "Monthly News – February 2025",
    snippet:
      "Hi everyone, Many thanks for your donations and support. Here are the news for this month. Important Firefox Update On March 14, 2025, a root certificate used by Firefox will expire. When this happen, Firefox version 128 (and lower) will suffer significant issues related to: configuration add-ons signed content DRM-protected media playback To avoid these […]",
  },
  {
    date: "Sat, 08 Feb 2025",
    title: "Monthly News – January 2025",
    snippet:
      "Hi everyone, We received donations from 852 people in December, for an all-time monthly record of $31,720! Every time this number goes up I think of it the same way. I imagine that many people in one big room, all there just for us. Imagine it for a moment. It’s huge, not only in terms […]",
  },
];

const FromBlog = () => {
  return (
    <section className="border-y border-gray-200 bg-gray-100">
      <div className="text-altblack mx-auto my-20 max-w-[1200px]">
        <div className="text-center flex flex-col gap-2 mb-14">
          <h3 className="font-playfair text-[24px] italic mb-2">From the blog</h3>
          <h2 className="font-poppins text-4xl font-[600]">Latest news</h2>
          <p className="font-ubuntu text-[15px] font-light">
            Click a news title to get to the article.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 px-10">
          {blogList.map((item, index) => (
            <Card key={index} cardType="secondary">
              <div className="flex items-center justify-between mb-2">
                <p className="font-ubuntu text-[15px] text-gray-400 font-light">
                  {item.date}
                </p>
                <Tag>Blog</Tag>
              </div>

              <h3 className="font-poppins text-[18px] text-gray-400 mb-3">{item.title}</h3>
              <p className="font-ubuntu text-[15px] font-light">
                {item.snippet}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromBlog;
