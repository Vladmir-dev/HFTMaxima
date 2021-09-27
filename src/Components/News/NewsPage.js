import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./NewsCards";
import { fetchNews } from "../../Axios/NewsApi";
const alanKey =
  "09b5bfdae0904e5f711da648627569242e956eca572e1d8b807a3e2338fdd0dc/stage";

export default function NewsPage() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [news, setNews] = useState([]);
  
  console.log(news)
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newsHeadlines") {
          setNewsArticles(articles);
        } else if (command === "open") {
          const parsedNumber =
            number.legnth >= 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening ...");
          }
        }
      },
    });
  }, []);
  return (
    <div>
      <NewsCards articles={newsArticles} />
    </div>
  );
}
