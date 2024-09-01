import React, { useState} from 'react';
import BookmarkList from '../components/BookmarkList';
import './Bookmarks.css'; // Create this CSS file for styling

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleBookmark = (article) => {
    const isBookmarked = bookmarks.find((item) => item.url === article.url);
    let updatedBookmarks;
    if (isBookmarked) {
      updatedBookmarks = bookmarks.filter((item) => item.url !== article.url);
    } else {
      updatedBookmarks = [...bookmarks, article];
    }
    setBookmarks(updatedBookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  };

  return (
    <div className="bookmarks-container">
      <h2>Bookmarked Articles</h2>
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        <BookmarkList bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
      )}
    </div>
  );
}

export default Bookmarks;
