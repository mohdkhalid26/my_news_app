import React, { useEffect, useState } from "react";

import axios from "axios";
import "./Entertainment.scss";
function Entertainment() {
  const [data, setData] = useState([]);

  const fetchApi = () =>
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=f8797d61a4c74a3ea9212b80328ad556"
      )
      .then((res) => setData(res.data.articles));
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="home">
      <div className="grid2">
        {data
          ? data.map((data, index) => {
              return (
                <div className="headlines2" key={index}>
                  <a href={data.url} target="_blank">
                    <img
                      className={`img${index} headlines2img`}
                      src={
                        data.urlToImage
                          ? data.urlToImage
                          : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAOVBMVEX////n5+fl5eX7+/upqan39/fQ0NC7u7ukpKSsrKydnZ3s7Ozi4uKhoaHa2trHx8e1tbXBwcGXl5fJo2UIAAADCklEQVRoge2bwXLjIAyGwYAAyyDY93/Y/YXdTi+bZut0cpEmIY7A+kDCSBc7/z5x3m/vEWVvKbxD0qbs4N4hwdjGNraxjW1sYxvb2MY2trGNbWxjG9vYxja2sY39MnbghDaxXvrOl5ZZdWn1L935Ry+8T/oXku6yj32gzWg47nEfp8HcnJurp+9FFWOfa05jb+0Pu9nafmpusWMkcLLjkpU/lnZGfGvERHJVdipSYIfbgBfwkZpSemj4OTYVVrYUdW4v2wc7y+iOK+1LnRo6cryMSX1o9Fl2SXUqOy9z3OiDPUiyo3HsuvrporiAr4Y6OYlEdD/eJfRygJKXt7l8siuhL9MGdoodSw3wvHNUESSJOQ9+ZPcpdgsuZ7Bn1YFb6xc7VArtqOwbw+W11uJdxZYIqdKrfA42Fxjti5pjuti61lGH4x3bocLTcLho0N1L2bCJBc0mfZzLVjaXAw8Ydtt+pBWIXJOrbXaC52cREbrL9hn9YaqdnodcMaTpOLPjiVjnTS8xS7Shz5ExiGZGoO6yf0uMbWxjX9J7wGPrdTihPVb9wEgUW79GnKrUiToOPU/LIHeVe2y/twMJKivjz+ZSbbIuGfniurMVrRKONiXixKW2Tt3ear2S/Y/ZkpEfHZV0Ji9N5wrCIS71vBMqnKZgJxd2OodqPfNNLfY9O9SulhkHd9ACRkba/cW+1i2ZtaA4kM8YfZ/sh+n7GTY31qThUD9szcPlXYuEr+yg+Wzq8kfW2X2wCzL4vXhLZK6iRVDQvOhjT5rIv7B9O05VoZ7r9sluQro3f84OI7ZWYHkr21CXl9IKnPuFTaqKfvncjfE6ny9/H6gIsNNh36kLAnb6udeWDUQDdYSc7KrscLLv7jXRRaQ4tXwYWjFhKqhWwnrGtFCaKB3cqtePJhKxJQgP1ypz8FP/bft79nk6aMt06LmhjtwosSR3oBSlfqrQMono2bItNcar3Fn374mxjW1sYxvb2MY2trGNbWxjG9vYxja2sY1tbGMb+3/Yb3xP8l0viK53U98mfwEpHihDTH79ZAAAAABJRU5ErkJggg=="
                      }
                      alt={`img${index}`}
                    />
                  </a>
                  <h3 className="headlines2h3">
                    {data.title}
                    <br />
                    <p>{data.publishedAt}</p>
                  </h3>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Entertainment;
