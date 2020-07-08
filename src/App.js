import React, { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import News from "./components/News";
import Spinner from "./components/Spinner";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchNews("general");
  }, []);

  const searchNews = async (category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=your_api_key_here`;

    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setNews(data.articles);
  };

  return (
    <Fragment>
      <Header title="Buscador de noticias" />
      <div className="container white">
        <Formulario searchNews={searchNews} />
        {loading ? <Spinner /> : <News news={news} />}
      </div>
    </Fragment>
  );
}

export default App;
