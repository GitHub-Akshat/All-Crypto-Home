import { useEffect, useState } from "react"

const News = () => {
  const [news, setNews] = useState([]);

  const fetchCryptoNews = async()=>{
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_NEWS_SECRECT_KEY,
        'x-rapidapi-host': import.meta.env.VITE_NEWS_SECRECT_HOST
      }
    };
    try {
      const response = await fetch("https://crypto-news16.p.rapidapi.com/news/top/10" , options);
      const result = await response.json();
      setNews(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchCryptoNews();
  },[])

  
  if (news.length === 0) {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div className="w-[65px] h-[65px] border-[5px] border-t-cyan-700 border-[#e2e8f0] rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="news-container pt-32 pb-10">
      <h2 className="text-center text-5xl font-bold pb-4 mb-10">Latest Crypto News</h2>
      <ul className="news-list flex flex-col items-center">
        {news.map((article, index) => (
          <li key={index} className="news-item p-4 mb-5 border-b bg-neutral-200 rounded-lg w-full md:w-[900px]">
            <h3 className="font-semibold text-2xl">{article.title}</h3>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block"
            >
              Read more
            </a>
            <p className="text-sm text-gray-500 mt-1">{article.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News