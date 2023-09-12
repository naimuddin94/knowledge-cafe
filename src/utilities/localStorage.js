const getBookmarkFromLS = () => {
  const bookmarks = localStorage.getItem("bookmarks");
  if (bookmarks) {
    return JSON.parse(bookmarks);
  }
  return [];
};

const getMinuteCountFromLS = () => {
  const minutes = localStorage.getItem("minutes");
  if (minutes) {
    return JSON.parse(minutes);
  }
  return 0;
};

const savedBookmarkLS = (keyName, value) => {
  const bookmarksStringify = JSON.stringify(value);
  localStorage.setItem(keyName, bookmarksStringify);
};

const addBookmark = (blogId) => {
  const bookmarks = getBookmarkFromLS();
  bookmarks.push(blogId);
  savedBookmarkLS("bookmarks", bookmarks);
};
const addMinuteCount = (min) => {
  const minutesFromLS = getMinuteCountFromLS();
  const minNum = parseInt(minutesFromLS);
  const newMinutes = minNum + min;
  savedBookmarkLS("minutes", newMinutes);
};

const removeToLS = (blogId) => {
  const bookmarks = getBookmarkFromLS();
  const newBookmarks = bookmarks.filter((id) => id !== blogId);
  savedBookmarkLS("bookmarks", newBookmarks);
};

export {
  addBookmark,
  getBookmarkFromLS,
  removeToLS,
  addMinuteCount,
  getMinuteCountFromLS,
};
