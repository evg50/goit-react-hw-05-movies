import React, { useState, useEffect } from 'react';

import axios from 'axios';
axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);
export default function NewsApi() {
  const [articles, setArticles] = useState([]);
  async function fu() {
    const response = await axios.get('/search?query=react');
    setArticles(response.data.hits);
  }

  useEffect(() => {
    fu();
  }, []);

  return (
    <div>
      {articles.length > 0 ? <ArticleList articles={articles} /> : null}
    </div>
  );
}
