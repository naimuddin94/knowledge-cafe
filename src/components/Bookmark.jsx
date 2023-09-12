import PropTypes from "prop-types";
import { AiFillCloseSquare } from "react-icons/ai";

const Bookmark = ({ bookmarks, handleRemoveBM }) => {
  return (
    <div>
      {bookmarks &&
        bookmarks.map((bookmark) => (
          <div
            className="pl-8 pr-10 pb-4 pt-6 text-xl font-semibold text-gray-700 mb-2 bg-slate-100 rounded-md relative"
            key={bookmark.id}
          >
            <AiFillCloseSquare
              onClick={() => handleRemoveBM(bookmark)}
              className="absolute cursor-pointer text-gray-400 hover:text-red-400 hover:scale-110 duration-200 text-2xl right-2 top-2"
            />
            <h2>{bookmark.title}</h2>
          </div>
        ))}
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array,
  handleRemoveBM: PropTypes.func,
};

export default Bookmark;
