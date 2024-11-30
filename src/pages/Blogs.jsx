import { useEffect, useState } from "react"

const Blogs = () => {
  const[blogs, setBlogs] = useState([]);

  const fetchCryptoBlogs = async()=>{
    const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_NEWS_SECRECT_KEY1,
      'x-rapidapi-host': import.meta.env.VITE_NEWS_SECRECT_HOST1
    }
  };
    try {
      const response = await fetch("https://all-crypto-news-feed.p.rapidapi.com/get_blogs_feed", options);
      const result = await response.json();
      setBlogs(result);
    } catch (error) {
      console.error(error);
    }
  }
    
  useEffect(()=>{
    fetchCryptoBlogs();
  },[])

  if (blogs.length === 0) {
    return (
      <div className="grid place-items-center min-h-[80vh]">
        <div className="w-[65px] h-[65px] border-[5px] border-t-cyan-700 border-[#e2e8f0] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="news-container pt-32 pb-10">
      <h2 className="text-center text-5xl font-bold pb-4 mb-10">Crypto Blogs</h2>
      <ul className="news-list flex flex-col items-center">
        {blogs.slice(0, 10).map((article)=> (
          <li
            key={article._id}
            className="news-item p-4 mb-5 border-b bg-neutral-200 rounded-lg w-full md:w-[900px]"
          >
            <h3 className="font-semibold text-2xl">{article.title}</h3>
            <p className="text-md text-gray-700 mt-2">{article.en}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-2 inline-block"
            >
              Read more
            </a>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(article.time).toLocaleDateString()} {/* Format date */}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs