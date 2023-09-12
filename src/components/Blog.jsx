import PropTypes from "prop-types";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";

const Blog = ({ blog, handleReadTime, handleBookmarks, bookmarks }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-4 mb-12 bg-gray-50 p-10 rounded-md">
      <img src={cover} alt="" className="w-full rounded-md" />
      <h1 className="text-3xl font-bold text-gray-700">{title}</h1>
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img src={author_img} className="w-16 rounded-full" alt="" />
          <div>
            <h3 className="font-semibold">{author}</h3>
            <small>{posted_date}</small>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <h5>{reading_time}min read</h5>
          <button onClick={() => handleBookmarks(blog)}>
            <BsBookmarks />
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
        onClick={() => handleReadTime(reading_time)}
        className="text-blue-700 underline font-medium"
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
