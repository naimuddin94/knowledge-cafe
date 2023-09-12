import PropTypes from "prop-types";
import Blog from "./Blog";

const Blogs = ({ blogs, handleReadTime, handleBookmarks, bookmarks }) => {
  return (
    <div className="md:w-2/3">
      {blogs &&
        blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleReadTime={handleReadTime}
            handleBookmarks={handleBookmarks}
            bookmarks={bookmarks}
          />
        ))}
    </div>
  );
};

Blogs.propTypes = {
  blogs: PropTypes.array.isRequired,
  handleReadTime: PropTypes.func,
  handleBookmarks: PropTypes.func,
  bookmarks: PropTypes.array,
};

export default Blogs;
