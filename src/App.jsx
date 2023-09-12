import { useEffect, useState } from "react";
import Blogs from "./components/Blogs";
import Bookmarks from "./components/Bookmarks";
import {
  addBookmark,
  getBookmarkFromLS,
  removeToLS,
  addMinuteCount,
  getMinuteCountFromLS,
} from "./utilities/localStorage";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  useEffect(() => {
    const storedBookmarks = getBookmarkFromLS();
    const storedMinutes = getMinuteCountFromLS();
    if (blogs.length) {
      const savedBookmarks = [];
      for (const id of storedBookmarks) {
        const savedBlog = blogs.find((b) => b.id === id);
        savedBookmarks.push(savedBlog);
      }
      setBookmarks(savedBookmarks);
    }
    setReadTime(storedMinutes);
  }, [blogs]);

  const handleReadTime = (id, time) => {
    setReadTime(readTime + time);
    addMinuteCount(time);
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(newBookmarks);
    removeToLS(id);
  };

  const handleBookmarks = (blog) => {
    const findBlog = bookmarks.find((b) => b === blog);
    if (!findBlog) {
      setBookmarks([...bookmarks, blog]);
      addBookmark(blog.id);
    }
  };

  const handleRemoveBM = (blog) => {
    const newBookmarks = bookmarks.filter((bookmark) => bookmark !== blog);
    setBookmarks(newBookmarks);
    removeToLS(blog.id);
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-700 text-center my-5">
        Knowledge Cafe
      </h1>
      <div className="md:flex gap-4 mx-8">
        <Blogs
          blogs={blogs}
          handleReadTime={handleReadTime}
          handleBookmarks={handleBookmarks}
          bookmarks={bookmarks}
        />
        <Bookmarks
          readTime={readTime}
          bookmarks={bookmarks}
          handleRemoveBM={handleRemoveBM}
        />
      </div>
    </div>
  );
}

export default App;
