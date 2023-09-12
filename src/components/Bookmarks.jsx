import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ readTime, bookmarks, handleRemoveBM }) => {
  return (
    <div className="md:w-1/3 py-10">
      <h1 className="text-lg font-medium text-blue-800 bg-blue-50 border-2 border-blue-300 rounded-lg px-8 py-3">
        Reading Time Count: {readTime}min
      </h1>
      <h2 className="text-lg font-medium text-gray-500 border-y my-2 px-8 py-3">
        Bookmarks Blogs: {bookmarks.length}
      </h2>
      <Bookmark bookmarks={bookmarks} handleRemoveBM={handleRemoveBM} />
    </div>
  );
};

Bookmarks.propTypes = {
  readTime: PropTypes.number,
  bookmarks: PropTypes.array,
  handleRemoveBM: PropTypes.func,
};

export default Bookmarks;
