import PropTypes from "prop-types";
import { useState } from "react";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";

const Blog = ({ blog, handleReadTime, handleBookmarks, bookmarks }) => {
  const [read, setRead] = useState(false);
  const {
    id,
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  const isColor = bookmarks.includes(blog);
  console.log(isColor, bookmarks.length);

  return (
    <div className="space-y-4 mb-12 bg-gray-50 p-4 md:p-10 rounded-md">
      <img src={cover} alt="" className="w-full rounded-md" />
      <h1
        className={`"text-xl md:text-3xl font-bold " ${
          read ? "text-rose-400" : "text-gray-600"
        }`}
      >
        {title}
      </h1>
      <div className="sm:flex justify-between">
        <div className="flex gap-3 items-center">
          <img src={author_img} className="w-16 rounded-full" alt="" />
          <div>
            <h3 className="font-semibold">{author}</h3>
            <small>{posted_date}</small>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 bg-slate-100 h-fit w-fit px-4 py-1 rounded-md flex items-center gap-1">
          <h5>{reading_time}min read</h5>
          <button onClick={() => handleBookmarks(blog)}>
            {isColor ? (
              <BsBookmarksFill className="text-yellow-500" />
            ) : (
              <BsBookmarks />
            )}
          </button>
        </div>
      </div>
      <div>
        {hashtags &&
          hashtags.map((hash, idx) => (
            <span className="mr-3 text-gray-500" key={idx}>
              #{hash}
            </span>
          ))}
      </div>
      <button
        disabled={read}
        onClick={() => {
          handleReadTime(id, reading_time);
          setRead(true);
        }}
        className={
          read
            ? "text-red-300 underline font-medium"
            : "text-blue-500 underline font-medium"
        }
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleReadTime: PropTypes.func,
  handleBookmarks: PropTypes.func,
  bookmarks: PropTypes.array,
};

export default Blog;
