const getBookmarkFromLS = () => {
  const bookmarks = localStorage.getItem("bookmarks");
  if (bookmarks) {
    return JSON.parse(bookmarks);
  }
  return [];
};

const savedBookmarkLS = (bookmarks) => {
  const bookmarksStringify = JSON.stringify(bookmarks);
  localStorage.setItem("bookmarks", bookmarksStringify);
};

const addBookmark = (blogId) => {
  const bookmarks = getBookmarkFromLS();
  bookmarks.push(blogId);
  savedBookmarkLS(bookmarks);
};

const removeToLS = (blogId) => {
  const bookmarks = getBookmarkFromLS();
  const newBookmarks = bookmarks.filter((id) => id !== blogId);
  savedBookmarkLS(newBookmarks);
};

export { addBookmark, getBookmarkFromLS, removeToLS };
