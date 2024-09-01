import React, { useEffect, useState } from 'react';
import FilterBar from '../components/FilterBar';
import NewsList from '../components/NewsList';
import './Home.css';

function Home() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('All');
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = '6405e08460064589b3acddbdf2704da0';

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      let url = `https://newsapi.org/v2/everything?q=health&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;

      if (category !== 'All') {
        url = `https://newsapi.org/v2/everything?q=health AND ${category}&language=en&sortBy=publishedAt&apiKey=${API_KEY}`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === 'ok') {
          setArticles(data.articles);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to fetch news articles.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, API_KEY]);

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
    <div className="home-container">
      <FilterBar category={category} setCategory={setCategory} />
      {loading && <p>Loading articles...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
        <NewsList articles={articles} bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
      )}
    </div>
  );
}

export default Home;
